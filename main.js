// 定义动画的关键帧
const aliceTumbling = [
    { transform: "rotate(0) scale(1)" },
    { transform: "rotate(360deg) scale(0)" },
  ];
  
  // 定义动画的时间属性
  const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: "forwards",
  };
  
  // 获取三个图像的DOM元素
  const alice1 = document.querySelector("#alice1");
  const alice2 = document.querySelector("#alice2");
  const alice3 = document.querySelector("#alice3");
  
  // 定义一个函数来处理动画序列
  function sequenceAnimations(animations) {
    let promise = Promise.resolve();
  
    animations.forEach((anim) => {
      promise = promise.then(() => anim());
    });
  
    return promise;
  }
  
  // 创建并启动动画序列
  sequenceAnimations([
    () => alice1.animate(aliceTumbling, aliceTiming).finished,
    () => alice2.animate(aliceTumbling, aliceTiming).finished,
    () => alice3.animate(aliceTumbling, aliceTiming).finished,
  ]).then(() => {
    console.log('所有动画已完成');
  });