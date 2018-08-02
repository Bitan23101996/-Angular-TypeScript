//created a class
class YoutubeVideo {
  private videoTitle: string;
  private like: number;
  private dislike: number;
  private views: number;
  private channelName: string;
  private dateOfPublish: string;
  private numberOfComment: number;
  private category: string;
  private description: string;
  private videoTime: string;
  private channelSubscribe: number;
  private subtitle: string[];
  private resolution: number[] = [144, 240, 360, 480, 720, 1080];
  // constructor
  constructor(
    videoTitle: string,
    like: number,
    dislike: number,
    views: number,
    channelName: string,
    dateOfPublish: string,
    numberOfComment: number,
    category: string,
    description: string,
    videoTime: string,
    channelSubscribe: number,
    subtitle: string[]

    // check for age-restricted or not
  ) {
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

  //use of getter method

  //get title
  public getVideoTitle = (): string => {
    return this.videoTitle;
  };
  //get like
  public getLike = (): number => {
    return this.like;
  };
  //get dislike
  public getDislike = (): number => {
    return this.dislike;
  };
  //get views
  public getNumberOfViews = (): number => {
    return this.views;
  };
  //get channel name
  public getChannelName = (): string => {
    return this.channelName;
  };

  //get date of publish
  public getDateOfPublish = (): string => {
    return this.dateOfPublish;
  };
  //get number of comments
  public getNumberOfComment = (): number => {
    return this.numberOfComment;
  };

  //get category
  public getCategory = (): string => {
    return this.category;
  };
  //get description
  public getDescription = (): string => {
    return this.description;
  };
  //get videoTime
  public getRunTime = (): string => {
    return this.videoTime;
  };

  //get channel subscribetion
  public getNumberOfSubscription = (): number => {
    return this.channelSubscribe;
  };
  //get video resolution
  public getResolution = (): number[] => {
    return this.resolution;
  };
  public getSubtitle = (): string[] => {
    return this.subtitle;
  };
  //use of setter method

  //set video title
  public setVideoTilte = (title: string) => {
    this.videoTitle = title;
  };
  //set like
  public setLike = (like: number) => {
    this.like = like;
  };
  //set dislike
  public setDislike = (dislike: number) => {
    this.dislike = dislike;
  };
  //set number of views
  public setNumberOfViews = (views: number) => {
    this.views = views;
  };
  //set channel name
  public setChannelName = (channelName: string) => {
    this.channelName = channelName;
  };
  //set publish date
  public setDateOfPublish = (dateOfPublish: string) => {
    this.dateOfPublish = dateOfPublish;
  };
  //set number of comments
  public setNumberOfComments = (numberOfComment: number) => {
    this.numberOfComment = numberOfComment;
  };
  //set category
  public setCategory = (category: string) => {
    this.category = category;
  };
  //set desciprtion
  public setDescription = (description: string) => {
    this.description = description;
  };
  //set runtime
  public setRuntime = (videoTime: string) => {
    this.videoTime = videoTime;
  };
  //set number of subscriber
  public setNumberOfSubscription = (channelSubscribe: number) => {
    this.channelSubscribe = channelSubscribe;
  };
  //set video resolution
  public setResolution = (resolution: number[]) => {
    this.resolution = resolution;
  };
  //set subtitle
  public setSubtitle(subtitle: string[]) {
    this.subtitle = subtitle;
  }
} //end of the class

//create object of that class
let object = new YoutubeVideo(
  "Top Tech and Gadgets Under Rs. 250",
  500,
  40,
  13173,
  "iGyaan",
  "July 28,2018",
  153,
  "Science & Technology",
  "This is a technology related video. All content used is copyright of iGyaan, Use or commercial display or editing of the content without proper authorization is not allowed.",
  "9:05",
  10000000,
  ["English", "French", "German"]
);

//set all values into a variables
let title = object.getVideoTitle();
let like = object.getLike();
let dislike = object.getDislike();
let views = object.getNumberOfViews();
let channelName = object.getChannelName();
let dateOfPublish = object.getDateOfPublish();
let numberOfComment = object.getNumberOfComment();
let category = object.getCategory();
let description = object.getDescription();
let runTime = object.getRunTime();
let NumberOfSubscription = object.getNumberOfSubscription();
let subtitle = object.getSubtitle();
let resolution = object.getResolution();

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
