varying float vTime;

void main() {
  // 使用 vTime 来动态改变颜色
  float red = 1.0 * sin(vTime);
  float green = 1.0 * cos(vTime);
  float blue = 1.0 * sin(vTime);

  gl_FragColor = vec4(red, green, blue, 1.0);
}