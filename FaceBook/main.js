//created a class
var FacebookProfile = /** @class */ (function () {
    // constructor
    function FacebookProfile(nickName, mobile, dob, universityName, schoolName, professionalSkills, gender, language, religiousView, politicalViews, favouriteQuote, bloodGroup, liveIn, numberOfFriends, books, flims, groups, checkin, socialLinks) {
        var _this = this;
        //public getter method
        //public get title
        this.getNickName = function () {
            return _this.nickName;
        };
        //public get mobile
        this.getMobile = function () {
            return _this.mobile;
        };
        //public get dob
        this.getDOB = function () {
            return _this.dob;
        };
        //public get universityName
        this.getUniversityName = function () {
            return _this.universityName;
        };
        //public get school name
        this.getSchoolName = function () {
            return _this.schoolName;
        };
        //public get Professional Skills
        this.getProfessionalSkills = function () {
            return _this.professionalSkills;
        };
        //public get gender
        this.getGender = function () {
            return _this.gender;
        };
        //public get language
        this.getLanguage = function () {
            return _this.language;
        };
        //public get religiousView
        this.getReligiousView = function () {
            return _this.religiousView;
        };
        //public get politicalViews
        this.getPoliticalView = function () {
            return _this.politicalViews;
        };
        //public get favourite quote
        this.getFavouriteQuote = function () {
            return _this.favouriteQuote;
        };
        //public get blood group
        this.getBloodGroup = function () {
            return _this.bloodGroup;
        };
        //public get liveIn
        this.getLiveIn = function () {
            return _this.liveIn;
        };
        //public get number of friends
        this.getNumberOfFrineds = function () {
            return _this.numberOfFriends;
        };
        //public get books
        this.getBooks = function () {
            return _this.books;
        };
        //public get flims
        this.getFlims = function () {
            return _this.flims;
        };
        //public get groups
        this.getGroups = function () {
            return _this.groups;
        };
        //public get check in
        this.getCheckIn = function () {
            return _this.checkin;
        };
        //public get social links
        /*public getSocial_Link(): string[] {
          return this.socialLinks;
        }
      */
        //Get Social link using Array
        this.getSocialLinks = function () {
            var socialLinks = _this.socialLinks;
            var length = socialLinks.length;
            console.log("Social Links : ");
            for (var i = 0; i < length; i++) {
                console.log(socialLinks[i]);
            }
        };
        //setter method
        //set nick name
        this.setNickName = function (nickName) {
            _this.nickName = nickName;
        };
        //set mobile number
        this.setMobile = function (mobile) {
            _this.mobile = mobile;
        };
        //set DOB
        this.setDOB = function (dob) {
            _this.dob = dob;
        };
        //set university name
        this.setUniversityName = function (universityName) {
            _this.universityName = universityName;
        };
        //set school name
        this.setSchoolName = function (schoolName) {
            _this.schoolName = schoolName;
        };
        //set professional skills
        this.setProfessionalSkills = function (professionalSkills) {
            _this.professionalSkills = professionalSkills;
        };
        //set gender
        this.setGender = function (gender) {
            _this.gender = gender;
        };
        //set language
        this.setLanguage = function (language) {
            _this.language = language;
        };
        //set religious view
        this.setReligiousView = function (religious) {
            _this.religiousView = religious;
        };
        //set political views
        this.setPoliticalView = function (political) {
            _this.politicalViews = political;
        };
        //set favourite quote
        this.setFavouriteQuote = function (quote) {
            _this.favouriteQuote = quote;
        };
        //set blood group
        this.setBloodGroup = function (bloodGroup) {
            _this.bloodGroup = bloodGroup;
        };
        //set livein
        this.setLiveIn = function (livein) {
            _this.liveIn = livein;
        };
        //set number of friends
        this.setNumberOfFrined = function (numberOfFriends) {
            _this.numberOfFriends = numberOfFriends;
        };
        //set books
        this.setBooks = function (books) {
            _this.books = books;
        };
        //set flims
        this.setFlims = function (flims) {
            _this.flims = flims;
        };
        //set groups
        this.setGroups = function (groups) {
            _this.groups = groups;
        };
        //set checkin
        this.setCheckIn = function (checkin) {
            _this.checkin = checkin;
        };
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
    return FacebookProfile;
}()); //end of the class
//create object of that class
var object = new FacebookProfile("Tatai", "8961743866", "23 October, 1996", "MAKAUT", "Burikhali K.M. Institution", "Java, C++, Angular JS", "Male", ["Bengali", "English", "Hindi"], "Hindu", "TMC", "Life is full of adventure", "B+", "Bauria, Howrah", 102, [
    "The Untold Love Story",
    "Kolkatay Feluda",
    "Feluda Somogro",
    "Satyajit Somogro",
    "Sharadindu Somogro"
], [
    "Captain America: Civil War",
    "Brick Mansions",
    "Blade",
    "Titanic",
    "Basanta Bilap",
    "Jamalaye Jibanta Manush"
], ["Campu Janta", "Friends Forever", "Love"], ["58 Gate", "Lake Mall", "South City Mall", "Avani Mall", "Junction Mall"], [
    "https://www.linkedin.com/in/bitan-das-15352b111/",
    "https://github.com/Bitan23101996"
]);
//store in variable
var nickName = object.getNickName();
var mobile = object.getMobile();
var dob = object.getDOB();
var universityName = object.getUniversityName();
var schoolName = object.getSchoolName();
var professionalSkills = object.getProfessionalSkills();
var gender = object.getGender();
var language = object.getLanguage();
var religiousViews = object.getReligiousView();
var politicalViews = object.getPoliticalView();
var favouriteQuote = object.getFavouriteQuote();
var bloodGroup = object.getBloodGroup();
var liveIn = object.getLiveIn();
var numberOfFriends = object.getNumberOfFrineds();
var books = object.getBooks();
var flims = object.getFlims();
var groups = object.getGroups();
var checkin = object.getCheckIn();
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
