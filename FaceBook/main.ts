//created a class
class FacebookProfile {
  private nickName: string;
  private mobile: string;
  private dob: string;
  private universityName: string;
  private schoolName: string;
  private professionalSkills: string;
  private gender: string;
  private language: string[];
  private religiousView: string;
  private politicalViews: string;
  private favouriteQuote: string;
  private bloodGroup: string;
  private liveIn: string;
  private numberOfFriends: number;
  private books: string[];
  private flims: string[];
  private groups: string[];
  private checkin: string[];
  private socialLinks: string[];
  // constructor
  constructor(
    nickName: string,
    mobile: string,
    dob: string,
    universityName: string,
    schoolName: string,
    professionalSkills: string,
    gender: string,
    language: string[],
    religiousView: string,
    politicalViews: string,
    favouriteQuote: string,
    bloodGroup: string,
    liveIn: string,
    numberOfFriends: number,
    books: string[],
    flims: string[],
    groups: string[],
    checkin: string[],
    socialLinks: string[]
  ) {
    this.nickName = nickName;
    this.mobile = mobile;
    this.dob = dob;
    this.universityName = universityName;
    this.schoolName = schoolName;
    this.professionalSkills = professionalSkills;
    this.gender = gender;
    this.language = language;
    this.religiousView = religiousView;
    this.politicalViews = politicalViews;
    this.favouriteQuote = favouriteQuote;
    this.bloodGroup = bloodGroup;
    this.liveIn = liveIn;
    this.numberOfFriends = numberOfFriends;
    this.books = books;
    this.flims = flims;
    this.groups = groups;
    this.checkin = checkin;
    this.socialLinks = socialLinks;
  } //end of the constructor

  //public getter method
  //public get title
  public getNickName = (): string => {
    return this.nickName;
  };
  //public get mobile
  public getMobile = (): string => {
    return this.mobile;
  };
  //public get dob
  public getDOB = (): string => {
    return this.dob;
  };
  //public get universityName
  public getUniversityName = (): string => {
    return this.universityName;
  };
  //public get school name
  public getSchoolName = (): string => {
    return this.schoolName;
  };

  //public get Professional Skills
  public getProfessionalSkills = (): string => {
    return this.professionalSkills;
  };
  //public get gender
  public getGender = (): string => {
    return this.gender;
  };
  //public get language
  public getLanguage = (): string[] => {
    return this.language;
  };
  //public get religiousView
  public getReligiousView = (): string => {
    return this.religiousView;
  };
  //public get politicalViews
  public getPoliticalView = (): string => {
    return this.politicalViews;
  };
  //public get favourite quote
  public getFavouriteQuote = (): string => {
    return this.favouriteQuote;
  };
  //public get blood group
  public getBloodGroup = (): string => {
    return this.bloodGroup;
  };
  //public get liveIn
  public getLiveIn = (): string => {
    return this.liveIn;
  };
  //public get number of friends
  public getNumberOfFrineds = (): number => {
    return this.numberOfFriends;
  };
  //public get books
  public getBooks = (): string[] => {
    return this.books;
  };
  //public get flims
  public getFlims = (): string[] => {
    return this.flims;
  };
  //public get groups
  public getGroups = (): string[] => {
    return this.groups;
  };
  //public get check in
  public getCheckIn = (): string[] => {
    return this.checkin;
  };
  //public get social links
  /*public getSocial_Link(): string[] {
    return this.socialLinks;
  }
*/
  //Get Social link using Array
  public getSocialLinks = () => {
    let socialLinks = this.socialLinks;
    let length = socialLinks.length;
    console.log("Social Links : ");

    for (let i = 0; i < length; i++) {
      console.log(socialLinks[i]);
    }
  };
  //setter method
  //set nick name
  public setNickName = (nickName: string) => {
    this.nickName = nickName;
  };
  //set mobile number

  public setMobile = (mobile: string) => {
    this.mobile = mobile;
  };
  //set DOB
  public setDOB = (dob: string) => {
    this.dob = dob;
  };

  //set university name
  public setUniversityName = (universityName: string) => {
    this.universityName = universityName;
  };
  //set school name
  public setSchoolName = (schoolName: string) => {
    this.schoolName = schoolName;
  };
  //set professional skills
  public setProfessionalSkills = (professionalSkills: string) => {
    this.professionalSkills = professionalSkills;
  };

  //set gender
  public setGender = (gender: string) => {
    this.gender = gender;
  };

  //set language
  public setLanguage = (language: string[]) => {
    this.language = language;
  };
  //set religious view
  public setReligiousView = (religious: string) => {
    this.religiousView = religious;
  };
  //set political views
  public setPoliticalView = (political: string) => {
    this.politicalViews = political;
  };
  //set favourite quote
  public setFavouriteQuote = (quote: string) => {
    this.favouriteQuote = quote;
  };
  //set blood group
  public setBloodGroup = (bloodGroup: string) => {
    this.bloodGroup = bloodGroup;
  };
  //set livein
  public setLiveIn = (livein: string) => {
    this.liveIn = livein;
  };
  //set number of friends
  public setNumberOfFrined = (numberOfFriends: number) => {
    this.numberOfFriends = numberOfFriends;
  };
  //set books
  public setBooks = (books: string[]) => {
    this.books = books;
  };
  //set flims
  public setFlims = (flims: string[]) => {
    this.flims = flims;
  };
  //set groups
  public setGroups = (groups: string[]) => {
    this.groups = groups;
  };
  //set checkin
  public setCheckIn = (checkin: string[]) => {
    this.checkin = checkin;
  };
} //end of the class

//create object of that class
let object = new FacebookProfile(
  "Tatai",
  "8961743866",
  "23 October, 1996",
  "MAKAUT",
  "Burikhali K.M. Institution",
  "Java, C++, Angular JS",
  "Male",
  ["Bengali", "English", "Hindi"],
  "Hindu",
  "TMC",
  "Life is full of adventure",
  "B+",
  "Bauria, Howrah",
  102,
  [
    "The Untold Love Story",
    "Kolkatay Feluda",
    "Feluda Somogro",
    "Satyajit Somogro",
    "Sharadindu Somogro"
  ],
  [
    "Captain America: Civil War",
    "Brick Mansions",
    "Blade",
    "Titanic",
    "Basanta Bilap",
    "Jamalaye Jibanta Manush"
  ],
  ["Campu Janta", "Friends Forever", "Love"],
  ["58 Gate", "Lake Mall", "South City Mall", "Avani Mall", "Junction Mall"],
  [
    "https://www.linkedin.com/in/bitan-das-15352b111/",
    "https://github.com/Bitan23101996"
  ]
);
//store in variable
let nickName = object.getNickName();
let mobile = object.getMobile();
let dob = object.getDOB();
let universityName = object.getUniversityName();
let schoolName = object.getSchoolName();
let professionalSkills = object.getProfessionalSkills();
let gender = object.getGender();
let language = object.getLanguage();
let religiousViews = object.getReligiousView();
let politicalViews = object.getPoliticalView();
let favouriteQuote = object.getFavouriteQuote();
let bloodGroup = object.getBloodGroup();
let liveIn = object.getLiveIn();
let numberOfFriends = object.getNumberOfFrineds();
let books = object.getBooks();
let flims = object.getFlims();
let groups = object.getGroups();
let checkin = object.getCheckIn();
//let socialLinks = object.getSocial_Link();

//print all things in console
console.log("Nick Name:- " + nickName);
console.log("Mobile Number:- " + mobile);
console.log("Date Of Birth:- " + dob);
console.log("University Name:- " + universityName);
console.log("School Name:- " + schoolName);
console.log("Professional Skills:- " + professionalSkills);
console.log("Gender:- " + gender);
console.log("Language:- " + language);
console.log("Religious View:- " + religiousViews);
console.log("Political Views:- " + politicalViews);
console.log("Favourite Quote:- " + favouriteQuote);
console.log("Blood Group:- " + bloodGroup);
console.log("Live In:- " + liveIn);
console.log("Number Of Friends:- " + numberOfFriends);
console.log("Books:- " + books);
console.log("Flims:- " + flims);
console.log("Groups:- " + groups);
console.log("Checks In:- " + checkin);
object.getSocialLinks(); //print social links
//console.log("Social Links:- " + socialLinks);
