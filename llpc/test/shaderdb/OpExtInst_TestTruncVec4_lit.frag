#version 450 core

layout(location = 0) in float a;
layout(location = 1) in vec4 b0;
layout(location = 0) out vec4 frag_color;

void main()
{
    vec4 b = trunc(b0);
    frag_color = b;
}
// BEGIN_SHADERTEST
/*
; RUN: amdllpc -spvgen-dir=%spvgendir% -v %gfxip %s | FileCheck -check-prefix=SHADERTEST %s
; SHADERTEST-LABEL: {{^// LLPC}} SPIRV-to-LLVM translation results
; SHADERTEST: = call reassoc nnan nsz arcp contract <4 x float> @llvm.trunc.v4f32(<4 x float>
; SHADERTEST: AMDLLPC SUCCESS
*/
// END_SHADERTEST