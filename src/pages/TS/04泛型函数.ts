export {}

function fn<T>(a: T): T {
  return a
}

fn<number>(10)
fn<string>('10')