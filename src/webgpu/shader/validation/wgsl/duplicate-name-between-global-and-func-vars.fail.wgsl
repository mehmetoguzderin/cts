# v-0013 - This fails because of the duplicated `a` variable.

const a : vec2<f32> = vec2<f32>(0.1, 1.0);

[[stage(vertex)]]
fn main() -> void {
  var a : f32;

  return;
}

