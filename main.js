const trafficLightEl = document.querySelector(".traffic-light-box");

const SignalState = {
  stop: "stop",
  attention: "attention",
  follow: "follow",
};

async function sleep(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 1000 * seconds);
  });
}

function setSignalState(state) {
  trafficLightEl.dataset.signalState = state;
}

async function loopTrafficLight() {
  while (true) {
    setSignalState(SignalState.stop);
    await sleep(10);
    setSignalState(SignalState.follow);
    await sleep(6);
    setSignalState(SignalState.attention);
    await sleep(2);
  }
}

loopTrafficLight();
