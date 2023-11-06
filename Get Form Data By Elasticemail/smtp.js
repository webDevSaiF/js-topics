(function () {
  const form = document.querySelector("form");
  const nameData = document.getElementById("name");
  const emailData = document.getElementById("email");
  const telData = document.getElementById("tel");
  const messageData = document.getElementById("message");

  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    Email.send({
      SecureToken: "90d27aa6-3946-46b2-b1d6-42bade94a3d2",
      To: emailData.value,
      From: "isaif041@gmail.com",
      Subject: "New Lead Submitted",
      Body: `
      Name: ${nameData.value},
      Email: ${emailData.value},
      Telephone: ${telData.value},
      Message: ${messageData.value},
      `,
    }).then((message) => alert(message));
    form.reset();
  });
})();
