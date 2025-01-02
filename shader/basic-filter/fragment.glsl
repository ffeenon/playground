uniform float uFilter;
uniform sampler2D uBaseTexture;
uniform sampler2D uFilterTexture;
varying vec2 vUv;

void main() {
    // version 1 使用if实现
    //  if(texture2D(uFilterTexture, vUv).r >= uFilter){
    //    gl_FragColor = texture2D(uBaseTexture, vUv);
    //  }else{
    //    gl_FragColor = vec4(0.0);
    //  }

    // version 2 出于性能考虑，避免使用分支，这里用step来代替
    //  float filterValue = texture2D(uFilterTexture, vUv).r;
    //  float mask = step(uFilter, filterValue); // step函数，>= 的情况下都是1
    //  vec4 baseColor = texture2D(uBaseTexture, vUv);
    //  gl_FragColor = baseColor*mask;

    // versino 3 使用smoothstep和mix平滑插值
    float filterValue = texture2D(uFilterTexture, vUv).r;
    float mask = smoothstep(uFilter - 0.05, uFilter + 0.05, filterValue);
    vec4 baseColor = texture2D(uBaseTexture, vUv);
    vec4 transparentColor = vec4(baseColor.rgb, 0.0);
    gl_FragColor = mix(transparentColor, baseColor, mask);
}