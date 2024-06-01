const video1 = new Promise((resolve, reject) => resolve("Video 01"));
const video2 = new Promise((resolve, reject) => resolve("Video 02"));
const video3 = new Promise((resolve, reject) => resolve("Video 03"));

Promise.all([video1, video2, video3])
  .then((data) => console.log([...data, "ALL"]))
  .catch((error) => console.log(error));

Promise.race([video1, video2, video3])
  .then((data) => console.log(data, "RACE"))
  .catch((error) => console.log(error));
// =============================
const userLeft = false;
const userLiked = true;

const withPromise = new Promise((resolve, reject) => {
  if (userLeft) {
    reject({
      message: "User Left [with Promise]",
    });
  } else if (userLiked) {
    reject({
      message: "User is not Interested [with Promise]",
    });
  } else {
    resolve({
      message: "Congratulations! User Subscribed [with Promise]",
    });
  }
});
withPromise
  .then((success) => {
    console.log(success);
  })
  .catch((error) => {
    console.log(error);
  });
// ========================================
function withoutPromise(callBack, errorCallBack) {
  if (userLeft) {
    errorCallBack({
      message: "User Left [without Promise]",
    });
  } else if (userLiked) {
    errorCallBack({
      message: "User is not Interested [without Promise]",
    });
  } else {
    callBack({
      message: "Congratulations! User Subscribed [without Promise]",
    });
  }
}
withoutPromise(
  (success) => {
    console.log(success);
  },
  (error) => {
    console.log(error);
  }
);
// ====================================

const sayGreet = new Promise((resolve, reject) => {
  let a = 1 + 3;
  if (a == 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

sayGreet
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });
