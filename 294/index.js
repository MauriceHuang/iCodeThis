const notifications = [
  {
    user: {
      name: "Tilde Tran",
      profile_image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    text: "Completed 4 Challenges",
    time: "Just now",
    is_new: true,
  },
  {
    user: {
      name: "Tuan Clemens",
      profile_image: "https://randomuser.me/api/portraits/men/14.jpg",
    },
    text: "Completed 4 Challenges",
    time: "Just now",
    is_new: false,
  },
  {
    user: {
      name: "Edwin Brown",
      profile_image: "https://randomuser.me/api/portraits/men/17.jpg",
    },
    text: "Completed 4 Challenges",
    time: "Just now",
    is_new: false,
  },
  {
    user: {
      name: "Cristobal Mireles",
      profile_image: "https://randomuser.me/api/portraits/men/63.jpg",
    },
    text: "Completed 4 Challenges",
    time: "Just now",
    is_new: false,
  },
];
const notificationWrapper = document.getElementById("notification-wrapper");

notifications.forEach((notification) => {
  const element = document.createElement("div");
  element.className = "flex p-6 gap-6 relative";
  element.innerHTML = `<img
            class="w-16 h-16 rounded-full object-cover"
            src="${notification.user.profile_image}"
            alt="${notification.user.name}-avar-image"
          />
          <div class="space-y-1">
            <strong>${notification.user.name}</strong>
            <p>
              ${notification.text}
                         </p>
            <small class="block text-violet-200">${notification.time}</small>
          </div>

          ${
            notification.is_new
              ? '<span class="uppercase bg-blue-300 px-3 absolute right-6 top-6 rounded-full">New</span>'
              : ""
          }`;
  notificationWrapper.appendChild(element);
});
