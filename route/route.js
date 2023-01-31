module.exports = app => {
    const users = require("../controller/users.controller");
    const news = require("../controller/news.controller")
    const comments = require("../controller/comment.controller")
    const like = require("../controller/commentLike.controller")
    const category = require("../controller/category.controller")

    // User Apis
    app.post("/createUser", users.createUser);

    app.get("/showAllUsers", users.showAllUsers);

    app.get("/getUserDetailByuserId/:userId", users.getUserDetailByuserId)

    app.get("/getUserDetailBymobileNumber/:mobileNumber", users.getUserDetailBymobileNumber)

    app.put("/updateUserDetailbyuserId/:userId", users.updateUserDetailByuserId)

    app.delete("/deleteUserDetailByuserId/:userId", users.deleteuserDetailByuserId)

    app.post("/loginUserByMobile", users.loginUserByMobile);

    app.post("/loginUserByEmail", users.loginByEmail);

    app.post("/loginUser", users.loginUser);

    // News Apis

    app.post("/createNews", news.createNews);

    app.get("/showAllNews", news.showAllNews);

    app.put("/updatePostByNewsId/:newsId", news.updatePostByNewsId);

    app.get("/showNewsBynewsId/:newsId", news.showNewsByNewsId);

    app.delete("/deletePostBynewsId/:newsId", news.deletePostBynewsId);


    // Comment Apis

    app.post("/createComment", comments.createComment);

    app.get("/showAllComments", comments.showAllComments);

    app.get("/getCommentDetailBycommentId/:commentId", comments.getCommentDetailBycommentId);

    app.delete("/deleteCommentBycommentId/:commentId", comments.deleteCommentBycommentId);

    app.put("/updateCommentBycommentId/:commentId", comments.updateCommentBycommentId);

    // commentLike Apis

    app.post("/createLike", like.createLike);

    app.get("/showAllLike", like.showAllLike);

    app.get("/showLikeByuserId/:userId", like.showLikeByuserId);

    app.delete("/deleteLikeByuserId/:userId", like.deleteLikeByuserId);

    app.put("/updateLikeByuserId/:userId", like.updateLikeByuserId);

    // category Apis

    app.post("/createCategory", category.createCategory);

    app.get("/showAllCategory", category.showAllCategory);

    app.get("/getCategoryBycategoryId/:categoryId", category.getCategoryBycategoryId);

    app.delete("/deleteCategoryBycategoryId/:categoryId", category.deleteCategoryBycategoryId);

    app.put("/updateCategoryBycategoryId/:categoryId", category.updateCategoryBycategoryId);
}