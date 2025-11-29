import { WaveShaderMaterialImpl } from '@/components/three/Scene';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      waveShaderMaterial: JSX.IntrinsicElements['shaderMaterial'] & {
        ref: React.RefObject<WaveShaderMaterialImpl>;
      };
    }
  }
}