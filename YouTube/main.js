//created a class
var YoutubeVideo = /** @class */ (function () {
    // constructor
    function YoutubeVideo(videoTitle, like, dislike, views, channelName, dateOfPublish, numberOfComment, category, description, videoTime, channelSubscribe, subtitle
    // check for age-restricted or not
    ) {
        var _this = this;
        this.resolution = [144, 240, 360, 480, 720, 1080];
        //use of getter method
        //get title
        this.getVideoTitle = function () {
            return _this.videoTitle;
        };
        //get like
        this.getLike = function () {
            return _this.like;
        };
        //get dislike
        this.getDislike = function () {
            return _this.dislike;
        };
        //get views
        this.getNumberOfViews = function () {
            return _this.views;
        };
        //get channel name
        this.getChannelName = function () {
            return _this.channelName;
        };
        //get date of publish
        this.getDateOfPublish = function () {
            return _this.dateOfPublish;
        };
        //get number of comments
        this.getNumberOfComment = function () {
            return _this.numberOfComment;
        };
        //get category
        this.getCategory = function () {
            return _this.category;
        };
        //get description
        this.getDescription = function () {
            return _this.description;
        };
        //get videoTime
        this.getRunTime = function () {
            return _this.videoTime;
        };
        //get channel subscribetion
        this.getNumberOfSubscription = function () {
            return _this.channelSubscribe;
        };
        //get video resolution
        this.getResolution = function () {
            return _this.resolution;
        };
        this.getSubtitle = function () {
            return _this.subtitle;
        };
        //use of setter method
        //set video title
        this.setVideoTilte = function (title) {
            _this.videoTitle = title;
        };
        //set like
        this.setLike = function (like) {
            _this.like = like;
        };
        //set dislike
        this.setDislike = function (dislike) {
            _this.dislike = dislike;
        };
        //set number of views
        this.setNumberOfViews = function (views) {
            _this.views = views;
        };
        //set channel name
        this.setChannelName = function (channelName) {
            _this.channelName = channelName;
        };
        //set publish date
        this.setDateOfPublish = function (dateOfPublish) {
            _this.dateOfPublish = dateOfPublish;
        };
        //set number of comments
        this.setNumberOfComments = function (numberOfComment) {
            _this.numberOfComment = numberOfComment;
        };
        //set category
        this.setCategory = function (category) {
            _this.category = category;
        };
        //set desciprtion
        this.setDescription = function (description) {
            _this.description = description;
        };
        //set runtime
        this.setRuntime = function (videoTime) {
            _this.videoTime = videoTime;
        };
        //set number of subscriber
        this.setNumberOfSubscription = function (channelSubscribe) {
            _this.channelSubscribe = channelSubscribe;
        };
        //set video resolution
        this.setResolution = function (resolution) {
            _this.resolution = resolution;
        };
        this.videoTitle = videoTitle;
        this.like = like;
        this.dislike = dislike;
        this.views = views;
        this.channelName = channelName;
        this.dateOfPublish = dateOfPublish;
        this.numberOfComment = numberOfComment;
        this.category = category;
        this.description = description;
        this.videoTime = videoTime;
        this.subtitle = subtitle;
        this.channelSubscribe = channelSubscribe;
    } //end of the constructor
    //set subtitle
    YoutubeVideo.prototype.setSubtitle = function (subtitle) {
        this.subtitle = subtitle;
    };
    return YoutubeVideo;
}()); //end of the class
//create object of that class
var object = new YoutubeVideo("Top Tech and Gadgets Under Rs. 250", 500, 40, 13173, "iGyaan", "July 28,2018", 153, "Science & Technology", "This is a technology related video. All content used is copyright of iGyaan, Use or commercial display or editing of the content without proper authorization is not allowed.", "9:05", 10000000, ["English", "French", "German"]);
//set all values into a variables
var title = object.getVideoTitle();
var like = object.getLike();
var dislike = object.getDislike();
var views = object.getNumberOfViews();
var channelName = object.getChannelName();
var dateOfPublish = object.getDateOfPublish();
var numberOfComment = object.getNumberOfComment();
var category = object.getCategory();
var description = object.getDescription();
var runTime = object.getRunTime();
var NumberOfSubscription = object.getNumberOfSubscription();
var subtitle = object.getSubtitle();
var resolution = object.getResolution();
//print all tings in console
console.log("Video Title:- " + title);
console.log("Like:- " + like);
console.log("Dislike:- " + dislike);
console.log("Views:- " + views);
console.log("Channel Name:- " + channelName);
console.log("Date Of Publish:- " + dateOfPublish);
console.log("Number of Comments:- " + numberOfComment);
console.log("Category:- " + category);
console.log("Description:- " + description);
console.log("Video Run Time:- " + runTime);
console.log("Number of subscription:- " + NumberOfSubscription);
console.log("Subtitle:- " + subtitle);
console.log("Resolution:- " + resolution);
