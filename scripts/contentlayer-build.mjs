#!/usr/bin/env node
// Minimal Contentlayer build runner that avoids the Clipanion exitCode bug on Node 22.

import '@contentlayer/utils/effect/Tracing/Enable'

import * as core from '@contentlayer/core'
import { errorToString } from '@contentlayer/utils'
import { OT, pipe, T } from '@contentlayer/utils/effect'

const verbose = process.env.CL_DEBUG !== undefined
const tracingServiceName = 'contentlayer-script'
const configPath = process.env.CL_CONFIG_PATH
const runMain = core.runMain({ tracingServiceName, verbose })

async function main() {
  await pipe(
    core.getConfig({ configPath }),
    T.tap((config) => (config.source.options.disableImportAliasWarning ? T.unit : T.fork(core.validateTsconfig))),
    T.chain((config) => core.generateDotpkg({ config, verbose })),
    T.tap(core.logGenerateInfo),
    OT.withSpan(tracingServiceName),
    runMain,
  )
}

main().catch((err) => {
  console.error('Contentlayer build failed:', errorToString(err) ?? err)
  process.exit(1)
})
