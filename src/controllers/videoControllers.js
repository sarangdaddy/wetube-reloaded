export const trending = (req, res) => res.render("home", { pageTitle: "Home" });

export const see = (req, res) => {
  return res.render("watch", { pageTitle: "Watch" });
};

export const edit = (req, res) => {
  return res.render("edit", { pageTitle: "Edit" });
};

export const serach = (req, res) => res.send("serach");
export const upload = (req, res) => res.send("Upload");

export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};
