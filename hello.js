// 定义回调函数
function delayedGreeting() {
  console.log("这是2秒后才显示的消息");
}

// 将回调函数传递给 setTimeout
// 2秒后，JavaScript 会自动调用 delayedGreeting
setTimeout(delayedGreeting, 2000);

console.log("先显示这条消息");

// 执行顺序：
// 1. 先显示 "先显示这条消息"
// 2. 2秒后显示 "这是2秒后才显示的消息"