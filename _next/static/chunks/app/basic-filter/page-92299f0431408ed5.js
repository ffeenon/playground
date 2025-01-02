(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[230],{9361:function(e,r,t){Promise.resolve().then(t.bind(t,1137))},1137:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return Home}});var n=t(7437),i=t(8524),l=t(8289),u=t(8252),a=t(5906),o=t(7206),s=t(2461),x=t(1500);let v=(0,o.g)({uFilter:0,uBaseTexture:new s.xEZ,uFilterTexture:new s.xEZ,transparent:!0},"uniform float uFilter;\nvarying vec2 vUv;\n\nvoid main(){\n    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);\n    vUv = uv;\n}","uniform float uFilter;\nuniform sampler2D uBaseTexture;\nuniform sampler2D uFilterTexture;\nvarying vec2 vUv;\n\nvoid main() {\n    // version 1 使用if实现\n    //  if(texture2D(uFilterTexture, vUv).r >= uFilter){\n    //    gl_FragColor = texture2D(uBaseTexture, vUv);\n    //  }else{\n    //    gl_FragColor = vec4(0.0);\n    //  }\n\n    // version 2 出于性能考虑，避免使用分支，这里用step来代替\n    //  float filterValue = texture2D(uFilterTexture, vUv).r;\n    //  float mask = step(uFilter, filterValue); // step函数，>= 的情况下都是1\n    //  vec4 baseColor = texture2D(uBaseTexture, vUv);\n    //  gl_FragColor = baseColor*mask;\n\n    // versino 3 使用smoothstep和mix平滑插值\n    float filterValue = texture2D(uFilterTexture, vUv).r;\n    float mask = smoothstep(uFilter - 0.05, uFilter + 0.05, filterValue);\n    vec4 baseColor = texture2D(uBaseTexture, vUv);\n    vec4 transparentColor = vec4(baseColor.rgb, 0.0);\n    gl_FragColor = mix(transparentColor, baseColor, mask);\n}");(0,x.e)({CustomFilterMaterial:v});var FilterMaterial=e=>{let{filter:r,baseTexture:t,filterTexture:i}=e;return(0,n.jsx)("customFilterMaterial",{uFilter:r,uBaseTexture:t,uFilterTexture:i})};function Experience(){let{size:e,filter:r}=(0,a.M4)({size:{value:1,step:.1,min:.5,max:3},filter:{value:0,step:.01,min:0,max:1}}),[t,i]=(0,l.mE)(["/texture/perlin.jpg","/texture/tree_root.png"]);return(0,n.jsxs)("mesh",{children:[(0,n.jsx)("planeGeometry",{args:[e,e]}),(0,n.jsx)(FilterMaterial,{filter:r,baseTexture:i,filterTexture:t})]})}function Home(){return(0,n.jsxs)(i.Xz,{children:[(0,n.jsx)(u.z,{}),(0,n.jsx)("axesHelper",{args:[10]}),(0,n.jsx)(Experience,{})]})}}},function(e){e.O(0,[870,689,151,301,971,472,744],function(){return e(e.s=9361)}),_N_E=e.O()}]);