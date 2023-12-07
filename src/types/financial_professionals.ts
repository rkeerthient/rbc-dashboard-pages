export enum Category {
  BOOK_TRAVEL = "Book Travel",
  CHECK_IN = "Check in",
  FEES_POLICIES = "Fees Policies - Deprecated",
  FLIGHT_STATUS = "Flight Status",
  TICKETS = "Tickets",
  TICKETING = "Ticketing - Deprecated",
  AMENITIES = "Amenities",
  RESERVE = "Reserve - Deprecated",
  FRONT_DESK = "Front Desk - Deprecated",
  PARKING = "Parking",
  GIFT_CARD = "Gift Card",
  WAITLIST = "Waitlist",
  DELIVERY = "Delivery (Restaurant)",
  ORDER = "Order (Restaurant)",
  TAKEOUT = "Takeout - Deprecated",
  PICKUP = "Pickup (Restaurant)",
  RESERVE_REST = "Reserve (Restaurant)",
  MENU = "Menu",
  APPOINTMENT = "Appointment - Deprecated",
  PORTFOLIO = "Portfolio - Deprecated",
  QUOTE = "Quote",
  SERVICES = "Services",
  STORE_ORDERS = "Store Orders - Deprecated",
  STORE_SHOP = "Store Shop - Deprecated",
  STORE_SUPPORT = "Store Support - Deprecated",
  SCHEDULE = "Schedule",
  SHOWTIMES = "Showtimes",
  AVAILABILITY = "Availability",
  PRICING = "Pricing",
  ACTIVITIES = "Activities",
  BOOK = "Book",
  BOOK__HOTEL_ = "Book (Hotel)",
  BOOK__RIDE_ = "Book Ride",
  BOOK__TOUR_ = "Book Tour",
  CAREERS = "Careers",
  CHARGE = "Charge",
  COUPONS = "Coupons",
  DELIVERY__RETAIL_ = "Delivery (Retail)",
  DONATE = "Donate",
  EVENTS = "Events",
  ORDER__RETAIL_ = "Order (Retail)",
  OTHER_MENU = "Other Menu - Deprecated",
  PICKUP__RETAIL_ = "Pickup (Retail)",
  RESERVE__PARKING_ = "Reserve (Parking)",
  SHOWS = "Shows",
  SPORTS = "Sports",
  SUPPORT = "Support",
  TEE_TIME = "Tee Time",
  GIFT_CARD__RESTAURANT_ = "Gift Card (Restaurant) - Deprecated",
}

export interface AppleActionLinks {
  category: Category;
  appStoreUrl: string;
  quickLinkUrl: string;
  appName: string;
}

export interface ImageThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface Image {
  url: string;
  width: number;
  height: number;
  thumbnails?: ImageThumbnail[];
  alternateText?: string;
}

export interface FrequentlyAskedQuestions {
  question: string;
  answer?: string;
}

export enum Type {
  DEPARTMENT_IN = "Department In",
  INDEPENDENT_ESTABLISHMENT_IN = "Independent Establishment In",
}

export interface GoogleEntityRelationship {
  type: Type;
  placeId: string;
}

export interface Interval {
  start: any;
  end: any;
}

export interface DayHour {
  openIntervals?: Interval[];
  isClosed?: boolean;
}

export interface HolidayHours {
  date: string;
  openIntervals?: Interval[];
  isClosed?: boolean;
  isRegularHours?: boolean;
}

export interface Hours {
  monday?: DayHour;
  tuesday?: DayHour;
  wednesday?: DayHour;
  thursday?: DayHour;
  friday?: DayHour;
  saturday?: DayHour;
  sunday?: DayHour;
  holidayHours?: HolidayHours[];
  reopenDate?: string;
}

export enum Type_1 {
  POSTAL_CODE = "Postal Code",
  REGION = "State/Region",
  COUNTY = "County",
  CITY = "City",
  SUBLOCALITY = "Sublocality",
}

export interface ServiceAreaPlaces {
  name?: string;
  type?: Type_1;
}

export interface Address {
  line1?: string;
  line2?: string;
  line3?: string;
  sublocality?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  extraDescription?: string;
  countryCode?: string;
}

export interface ComplexImage {
  image: Image;
  details?: string;
  description?: string;
  clickthroughUrl?: string;
}

export interface Coordinate {
  latitude?: number;
  longitude?: number;
}

export enum C_activeOnPages {
  YES = "Yes",
  NO = "No",
}

export interface C_advisorAddress {
  line1?: string;
  line2?: string;
  line3?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
}

export enum C_advisorPageOptIn {
  YES = "Yes",
  NO = "No",
}

export interface C_articlesDisplay {
  title?: string;
  description?: string;
  image?: Image;
  link?: string;
}

export enum C_assetRanges {
  ANY_ASSET_LEVEL = "Any asset level, including <250K",
  _250K_ = "250K+",
  _1M_ = "1M+",
  _10M_ = "10M+",
}

export interface EntityReference {
  entityId: string;
  name: string;
}

export enum C_attestation {
  I_AGREE = "I agree",
  I_AGREE__ANNUAL_REVIEW_REQUIRED_ = "I agree (Annual Review Required)",
}

export enum LinkType {
  OTHER = "Other",
  URL = "URL",
  PHONE = "Phone",
  EMAIL = "Email",
}

export interface C_awardDisclosureBioCTA {
  label?: string;
  linkType?: LinkType;
  link?: string;
}

export interface C_awardDisclosureCTA {
  label?: string;
  linkType?: LinkType;
  link?: string;
}

export interface C_awards {
  nameOfAwardOrHonor?: string;
  occupation?: string;
  issuer?: string;
  description?: string;
  monthAndYearReceived?: string;
}

export enum YearsReceived {
  _2030 = "2030",
  _2029 = "2029",
  _2028 = "2028",
  _2027 = "2027",
  _2026 = "2026",
  _2025 = "2025",
  _2024 = "2024",
  _2023 = "2023",
  _2022 = "2022",
  _2021 = "2021",
  _2020 = "2020",
  _2019 = "2019",
  _2018 = "2018",
  _2017 = "2017",
  _2016 = "2016",
  _2015 = "2015",
  _2014 = "2014",
  _2013 = "2013",
  _2012 = "2012",
  _2011 = "2011",
  _2010 = "2010",
  _2009 = "2009",
  _2008 = "2008",
  _2007 = "2007",
  _2006 = "2006",
  _2005 = "2005",
}

export interface C_awardsDashboard {
  nameOfAwardOrHonor?: string;
  yearsReceived?: YearsReceived[];
}

export interface C_awardsDisclosure {
  label?: string;
  linkType?: LinkType;
  link?: string;
}

export interface C_awardsDisclosureUpdate {
  name?: string;
  disclosure?: string;
}

export interface C_awardsDisplay {
  nameOfAwardOrHonor?: string;
  yearsReceived?: string;
}

export interface C_awardsWithDisclosure {
  nameOfAwardOrHonor?: string;
  yearsReceived?: string;
  disclosureText?: string;
}

export interface HeroBackgroundImageExpiry {
  yextAPIName?: string;
  bRColumnName?: string;
  expirationDate?: string;
}

export interface MissionStatementExpiry {
  yextAPIName?: string;
  bRColumnName?: string;
  expirationDate?: string;
}

export interface AdvisorProfileStatementExpiry {
  yextAPIName?: string;
  bRColumnName?: string;
  expirationDate?: string;
}

export interface TeamMemberProfileStatementExpiry {
  yextAPIName?: string;
  bRColumnName?: string;
  expirationDate?: string;
}

export interface TeamMemberCommunityServiceStatementExpiry {
  yextAPIName?: string;
  bRColumnName?: string;
  expirationDate?: string;
}

export interface TeamMemberImageUrlExpiry {
  yextAPIName?: string;
  bRColumnName?: string;
  expirationDate?: string;
}

export interface TeamProfileImageExpiry {
  yextAPIName?: string;
  bRColumnName?: string;
  expirationDate?: string;
}

export interface C_broadridgeMigrationExpirationDates {
  heroBackgroundImageExpiry?: HeroBackgroundImageExpiry;
  missionStatementExpiry?: MissionStatementExpiry;
  advisorProfileStatementExpiry?: AdvisorProfileStatementExpiry;
  teamMemberProfileStatementExpiry?: TeamMemberProfileStatementExpiry;
  teamMemberCommunityServiceStatementExpiry?: TeamMemberCommunityServiceStatementExpiry;
  teamMemberImageUrlExpiry?: TeamMemberImageUrlExpiry;
  teamProfileImageExpiry?: TeamProfileImageExpiry;
}

export enum C_businessUnit {
  WM = "WM",
  PBIG = "PBIG",
  PB = "PB",
  INST = "INST",
}

export enum C_clientFocuses {
  FINANCIAL_PLANNING = "College Education Planning",
  PERSONAL_RETIREMENT = "Corporate Benefits",
  SAVING_FOR_EDUCATION = "Corporate Executive Services",
  ESG_INVESTING = "Corporate Retirement Plan Services",
  PHILANTHROPHY___CHARITABLE_GIVING = "Divorce Transition Planning",
  INVESTING_ADVICE = "Education Planning",
  EMPLOYEE_BENEFITS_PLANNING = "Employee Benefits Planning",
  EXECUTIVE_COMPENSATION = "Executive Compensation",
  EQUITY_COMPENSATION_SERVICES = "Equity Compensation Services",
  FAMILY_WEALTH_MANAGEMENT_STRATEGIES = "Family Wealth Management Strategies",
  INSTITUTIONAL_AND_CORPORATE_BENEFIT_SERVICES = "Institutional and Corporate Benefit Services",
  INSTITUTIONAL_CONSULTING = "Institutional Consulting",
  INSTITUTIONAL_INVESTMENT_CONSULTING = "Institutional Investment Consulting",
  SERVICES_FOR_ENDOWMENTS__FOUNDATIONS__AND_NON_PROFITS = "Services for Endowments, Foundations, and Non-profits",
  SERVICES_FOR_DEFINED_BENEFIT_PLANS = "Services for Defined Benefit Plans",
  INVESTMENT_CONSULTING_FOR_DEFINED_CONTRIBUTION_PLANS = "Investment Consulting for Defined Contribution Plans",
  EMPLOYEE_FINANCIAL_HEALTH = "Employee Financial Health",
  INTERNATIONAL_WEALTH_MANAGEMENT = "International Wealth Management",
  LEGACY_PLANNING = "Legacy Planning",
  LGBT_WEALTH_PLANNING = "LGBT Wealth Planning",
  LIQUIDITY_MANAGEMENT = "Liquidity Management",
  MANAGING_NEW_WEALTH = "Managing New Wealth",
  PERSONAL_RETIREMENT_PLANNING = "Personal Retirement Planning",
  PHILANTHROPIC_PLANNING = "Philanthropic Planning",
  PORTFOLIO_MANAGEMENT_SERVICES = "Portfolio Management Services",
  SMALL_BUSINESS_STRATEGIES = "Small Business Strategies",
  SOCIALLY_RESPONSIBLE__VALUES_BASED__AND_ESG_INVESTING_ = "Socially Responsible, Values Based, and ESG Investing*",
  SPECIAL_NEEDS_PLANNING_STRATEGIES = "Special Needs Planning Strategies",
  WOMEN_AND_WEALTH = "Women and Wealth",
  SPORTS___ENTERTAINMENT = "Sports & Entertainment",
  INDIVIDUAL_AND_CORPORATE_INVESTMENT_STRATEGY = "Individual and Corporate Investment Strategy",
  TAX_MINIMIZATION = "Tax Minimization",
  RETIREMENT_INCOME = "Retirement Income",
}

export interface C_designations {
  abbreviation?: string;
  date?: string;
  name?: string;
}

export enum C_districtName {
  NORTHEAST = "Northeast",
  SOUTHEAST = "Southeast",
  INTERNATIONAL_AND_INSTITUTIONAL = "International And Institutional",
  MID_WEST = "Mid West",
  WEST = "West",
  MERRILL_PRIVATE_WEALTH_MANAGEMENT = "Merrill Private Wealth Management",
  MID_ATLANTIC = "Mid Atlantic",
  TEXAS_MOUNTAIN_SOUTH = "Texas Mountain South",
  PACIFIC_COAST = "Pacific Coast",
  TEXAS_SOUTH = "Texas South",
  MOUNTAIN_PACIFIC = "Mountain Pacific",
}

export interface C_education {
  school?: string;
  startDate?: string;
  endDate?: string;
  degree?: string;
}

export interface C_educationDisplay {
  school?: string;
  degree?: string;
}

export enum C_entityTypeCustomField {
  ADVISOR = "Advisor",
  TEAM = "Team",
  BRANCH = "Branch",
}

export interface C_events {
  title?: string;
  description?: string;
  image?: Image;
  caption?: string;
  date?: string;
  startTime?: string;
  endTime?: string;
  meetingType?: string;
  rSVPURL?: string;
  interestText?: string;
  phoneNumber?: string;
  email?: string;
  building?: string;
  floor?: string;
  suite?: string;
  streetAddress?: string;
  city?: string;
  state?: string;
  zip?: string;
}

export enum MeetingType {
  In_Person_Event = "In Person Event",
  Virtual_Event = "Virtual Event",
}

export interface C_eventsOLD {
  title?: string;
  description?: string;
  image?: Image;
  caption?: string;
  date?: string;
  time?: string;
  meetingType?: MeetingType[];
  rSVPURL?: string;
  interestText?: string;
}

export enum C_experienceDisplay {
  FIRM_LEVEL_OF_EXPERIENCE = "Firm Level of Experience",
  INDUSTRY_LEVEL_OF_EXPERIENCE = "Industry Level of Experience",
}

export interface C_fullBiographyPages {
  fullBiography?: any;
}

export interface C_fullBiographyPagesMarkdown {
  fullBiography?: any;
}

export enum C_hasAboutAdvisorShortDescription {
  Y = "Y",
  N = "N",
}

export enum C_hasExpertiseComments {
  Y = "Y",
  N = "N",
}

export enum C_hasFullBiographyPages {}

export enum C_hasFullBiographyPagesMarkdown {
  Y = "Y",
  N = "N",
}

export enum C_hasHeroPicture {
  Y = "Y",
  N = "N",
}

export enum C_hasHeroQuote {
  Y = "Y",
  N = "N",
}

export enum C_hasIndividualWebsite {
  Y = "Y",
  N = "N",
}

export enum C_hasPagesFlexibleHeadersSection {
  Y = "Y",
  N = "N",
}

export enum C_hasProfilePicture {
  Y = "Y",
  N = "N",
}

export enum C_hasTeamWebsite {
  Y = "Y",
  N = "N",
}

export interface C_heroBanner {
  image?: Image;
  textLine1?: string;
  textLine2?: string;
  cTAText?: string;
  cTALink?: string;
}

export enum C_hobbiesAndInterests {
  ADVENTURE_SPORTS = "Adventure sports",
  ANTIQUING = "Antiquing",
  BADMINTON = "Badminton",
  BASEBALL = "Baseball",
  BASKETBALL = "Basketball",
  BIKING = "Biking",
  BILLIARDS = "Billiards",
  BOATING = "Boating",
  BOWLING = "Bowling",
  BOXING = "Boxing",
  BUNGEE_JUMPING = "Bungee jumping",
  CAMPING = "Camping",
  CHESS = "Chess",
  COOKING = "Cooking",
  DANCING = "Dancing",
  DRAWING_SKETCHING = "Drawing/sketching",
  FISHING = "Fishing",
  FOOTBALL = "Football",
  GARDENING = "Gardening",
  GENEALOGY = "Genealogy",
  GOLFING = "Golfing",
  GYMNASTICS = "Gymnastics",
  HIKING = "Hiking",
  HORSEBACK_RIDING = "Horseback riding",
  HUNTING = "Hunting",
  ICE_HOCKEY = "Ice hockey",
  ICE_SKATING = "Ice skating",
  INTERIOR_DECORATING = "Interior decorating",
  KNITTING_CROCHETING = "Knitting/crocheting",
  MUSIC = "Music",
  PAINTING = "Painting",
  PHOTOGRAPHY = "Photography",
  PICKLEBALL = "Pickleball",
  POTTERY = "Pottery",
  RACQUETBALL = "Racquetball",
  READING = "Reading",
  REFEREEING = "Refereeing",
  ROCK_CLIMBING = "Rock climbing",
  RUNNING = "Running",
  RUNNING_MARATHONS = "Running marathons",
  SCRAPBOOKING = "Scrapbooking",
  SCUBA_DIVING = "Scuba diving",
  SEWING = "Sewing",
  SINGING = "Singing",
  SKIING = "Skiing",
  SKYDIVING = "Skydiving",
  SOCCER = "Soccer",
  SOFTBALL = "Softball",
  SPENDING_TIME_WITH_MY_FAMILY = "Spending time with my family",
  SURFING = "Surfing",
  SWIMMING = "Swimming",
  TABLE_TENNIS = "Table tennis",
  TENNIS = "Tennis",
  TRAVELING = "Traveling",
  VOLLEYBALL = "Volleyball",
  WATCHING_MOVIES = "Watching movies",
  WOOD_WORKING = "Wood working",
  WRITING = "Writing",
  YOGA = "Yoga",
}

export enum C_homeRepairs {
  OPTION_1 = "Try to fix it on my own",
  OPTION_2 = "Call a friend",
  CALL_A_PROFESSIONAL = "Call a professional",
  TRY_TO_IGNORE_IT = "Try to ignore it",
  OTHER = "Other",
}

export enum C_inTouchPreference {
  OFTEN = "An annual check-in is sufficient",
  NOT_OFTEN = "About twice a year",
  CLOSER_TO_QUARTERLY = "Closer to quarterly",
  WE_CONNECT_MORE_REGULARLY__E_G__MONTHLY_ = "We connect more regularly (e.g. monthly)",
}

export interface C_fAQs1 {
  question?: string;
  answer?: string;
}

export enum Question {
  If_you_were_stranded_on_a_desert_island__what_3_items_would_you_bring_and_why_ = "If you were stranded on a desert island, what 3 items would you bring and why?",
  How_and_why_did_you_become_a_financial_advisor_ = "How and why did you become a financial advisor?",
  What_types_of_clients_do_you_work_with_ = "What types of clients do you work with?",
  What_are_your_goals_for_when_working_with_your_clients_ = "What are your goals for when working with your clients?",
  What_are_the_most_frequent_questions_concerns_your_clients_share_with_you_ = "What are the most frequent questions/concerns your clients share with you?",
  What_questions_do_you_like_to_ask_people_who_are_considering_becoming_clients_ = "What questions do you like to ask people who are considering becoming clients?",
  How_do_you_spend_a_typical_Saturday_ = "How do you spend a typical Saturday?",
  What_do_you_think_personally_distinguishes_you_as_an_advisor_ = "What do you think personally distinguishes you as an advisor?",
  What_s_the_most_rewarding_aspect_of_being_a_financial_advisor_ = "What’s the most rewarding aspect of being a financial advisor?",
  Outside_of_work__what_are_your_interests_activities_in_the_community_ = "Outside of work, what are your interests/activities in the community?",
  What_s_the_most_important_thing_to_know_about_you_ = "What's the most important thing to know about you?",
}

export interface C_interviewQuestions1 {
  question: Question;
  answer?: string;
}

export interface C_fAQs {
  question: Question;
  answer: string;
}

export enum Type_2 {}

export enum LineOfBusiness {}

export enum ApprovalDuration {}

export enum ProfileVideo {
  Yes = "Yes",
  No = "No",
}

export interface C_kalturaVideo {
  name?: string;
  description?: string;
  tags?: string[];
  categories?: string[];
  referenceID?: string;
  type?: Type_2;
  lineOfBusiness?: LineOfBusiness;
  templateOwner?: string;
  approvalDuration?: ApprovalDuration;
  templateReviewDate?: string;
  scriptInstructions?: string;
  mAPID?: string;
  mAPExpirationDate?: string;
  kalturaID?: string;
  thumbnailImage?: Image;
  transcript?: string;
  profileVideo?: ProfileVideo;
}

export interface Address_1 {
  line1?: string;
  line2?: string;
  line3?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
}

export interface C_keyContacts {
  name?: string;
  firstName?: string;
  middleInitial?: string;
  lastName?: string;
  title?: string;
  lineOfBusiness?: string;
  credentials?: string;
  headshotImage?: Image;
  phoneNumber?: string;
  email?: string;
  nMLSNumber?: string;
  iD?: string;
  displayOrder?: string;
  bioParagraphMarkdown?: any;
  recognitionTitle?: string;
  jobTitle?: string;
  disclosures?: string;
  designationsWithSuperscript?: any;
  bioParagraph?: any;
  hasFullBiographyPages?: boolean;
  address?: Address_1;
}

export interface C_language {
  language?: string;
  proficiency?: string;
}

export enum C_languagesAttestation {}

export enum C_languagesUniverse {
  ENGLISH = "English",
  ALBANIAN = "Albanian",
  AMERICAN_SIGN_LANGUAGE__ASL_ = "American Sign Language (ASL)",
  ARABIC = "Arabic",
  ARMENIAN = "Armenian",
  AWADHI = "Awadhi",
  AZARI = "Azari",
  AZERBAIJANI = "Azerbaijani",
  BENGALI = "Bengali",
  BHOJPURI = "Bhojpuri",
  BOSNIAN = "Bosnian",
  BURMESE = "Burmese",
  CHINESE = "Chinese",
  CIRCASSIAN = "Circassian",
  CROATIAN = "Croatian",
  CZECH = "Czech",
  DANISH = "Danish",
  DUTCH = "Dutch",
  FARSI = "Farsi",
  FRENCH = "French",
  GAN = "Gan",
  GERMAN = "German",
  GREEK = "Greek",
  GUJARATI = "Gujarati",
  HAKKA = "Hakka",
  HAUSA = "Hausa",
  HEBREW = "Hebrew",
  HINDI = "Hindi",
  HUNGARIAN = "Hungarian",
  IGBO = "Igbo",
  ITALIAN = "Italian",
  JAPANESE = "Japanese",
  JAVANESE = "Javanese",
  JINYU = "Jinyu",
  KANNADA = "Kannada",
  KOREAN = "Korean",
  LITHUANIAN = "Lithuanian",
  MAITHILI = "Maithili",
  MALAY = "Malay",
  MALAYALAM = "Malayalam",
  MANDARIN = "Mandarin",
  MARATHI = "Marathi",
  MIN_NAN = "Min Nan",
  MONTENEGRIN = "Montenegrin",
  NORWEGIAN = "Norwegian",
  ORIYA = "Oriya",
  PERSIAN = "Persian",
  POLISH = "Polish",
  PORTUGUESE = "Portuguese",
  PUNJABI = "Punjabi",
  ROMANIAN = "Romanian",
  RUSSIAN = "Russian",
  SERBIAN = "Serbian",
  SERBO_CROATIAN = "Serbo-Croatian",
  SINDHI = "Sindhi",
  SLOVAK = "Slovak",
  SPANISH = "Spanish",
  SUNDA = "Sunda",
  SWEDISH = "Swedish",
  TAGALOG__FILIPINO_ = "Tagalog (Filipino)",
  TAIWANESE = "Taiwanese",
  TAMIL = "Tamil",
  TELUGU = "Telugu",
  THAI = "Thai",
  TURKISH = "Turkish",
  UKRAINIAN = "Ukrainian",
  URDU = "Urdu",
  VIETNAMESE = "Vietnamese",
  WU = "Wu",
  XIANG = "Xiang",
  YORUBA = "Yoruba",
  YUE_CANTONESE_ = "Yue (Cantonese)",
}

export enum C_lineOfBusiness {
  MERRILL_LYNCH_WEALTH_MANAGEMENT = "Merrill Lynch Wealth Management",
  MERRILL_PRIVATE_WEALTH_MANAGEMENT = "Merrill Private Wealth Management",
  DELEGATE = "Merrill Delegate",
  MARKET_EXECUTIVE = "Merrill Market Executive",
  MERRILL_RESIDENT_DIRECTOR = "Merrill Resident Director",
  APPROVER_LEVEL_1 = "Approver Level 1",
  MERRILL_DIVISION_EXECUTIVE = "Merrill Division Executive",
  PRIVATE_BANK = "Private Bank",
}

export enum C_linkedTeamHasWebsite {
  Y = "Y",
  N = "N",
}

export enum C_manualPublishComplete {
  YES__PUBLISH = "Yes, Publish",
  NO = "No",
}

export interface C_meta {
  title?: string;
  description?: string;
}

export enum C_mFSAActiveOnPages {
  YES = "Yes",
  NO = "No",
  NOT_MFSA = "Not MFSA",
}

export interface C_organizations {
  name?: string;
  position?: string;
  occupation?: string;
  monthAndYearJoined?: string;
  additionalInformation?: string;
}

export interface C_pagesFlexibleHeaderSection {
  header?: string;
  sectionText?: string;
  sectionPhoto?: Image;
  kalturaVideoIDOptional?: string;
}

export interface C_pagesMarketingSection {
  header?: string;
  sectionText?: string;
  sectionPhoto?: Image;
  kalturaVideoIDOptional?: string;
}

export enum C_pagesPilotEntity {
  YES = "Yes",
  NO = "No",
}

export interface Address_2 {
  line1?: string;
  line2?: string;
  line3?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
}

export interface C_professionalStaff {
  name?: string;
  firstName?: string;
  middleInitial?: string;
  lastName?: string;
  title?: string;
  lineOfBusiness?: string;
  credentials?: string;
  headshotImage?: Image;
  phoneNumber?: string;
  email?: string;
  nMLSNumber?: string;
  iD?: string;
  displayOrder?: string;
  bioParagraphMarkdown?: any;
  recognitionTitle?: string;
  jobTitle?: string;
  disclosures?: string;
  designationsWithSuperscript?: any;
  bioParagraph?: any;
  hasFullBiographyPages?: boolean;
  address?: Address_2;
}

export interface C_profileDelegates {
  delegateEmail?: string;
  giveProfileControl?: boolean;
  delegateUserID?: string;
}

export interface C_profileVideo {
  embedCode?: string;
  replaceImageWithVideo?: boolean;
}

export enum C_quarterlyOfficeMeeting {
  BY_REQUEST = "By request",
  NO = "No",
}

export enum C_registrations {
  AL = "AL",
  AK = "AK",
  AZ = "AZ",
  AR = "AR",
  CA = "CA",
  CO = "CO",
  CT = "CT",
  DE = "DE",
  DC = "DC",
  FL = "FL",
  GA = "GA",
  HI = "HI",
  ID = "ID",
  IL = "IL",
  IN = "IN",
  IA = "IA",
  KS = "KS",
  KY = "KY",
  LA = "LA",
  ME = "ME",
  MD = "MD",
  MA = "MA",
  MI = "MI",
  MN = "MN",
  MS = "MS",
  MO = "MO",
  MT = "MT",
  NE = "NE",
  NV = "NV",
  NH = "NH",
  NJ = "NJ",
  NM = "NM",
  NY = "NY",
  NC = "NC",
  ND = "ND",
  OH = "OH",
  OK = "OK",
  OR = "OR",
  PA = "PA",
  RI = "RI",
  SC = "SC",
  SD = "SD",
  TN = "TN",
  TX = "TX",
  UT = "UT",
  VT = "VT",
  VA = "VA",
  WA = "WA",
  WV = "WV",
  WI = "WI",
  WY = "WY",
  PR = "PR",
  AS = "AS",
  GU = "GU",
  MP = "MP",
  VI = "VI",
}

export interface Address_3 {
  line1?: string;
  line2?: string;
  line3?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
}

export interface C_specialists {
  name?: string;
  firstName?: string;
  middleInitial?: string;
  lastName?: string;
  title?: string;
  lineOfBusiness?: string;
  credentials?: string;
  headshotImage?: Image;
  phoneNumber?: string;
  email?: string;
  nMLSNumber?: string;
  iD?: string;
  displayOrder?: string;
  bioParagraphMarkdown?: any;
  recognitionTitle?: string;
  jobTitle?: string;
  disclosures?: string;
  designationsWithSuperscript?: any;
  bioParagraph?: any;
  hasFullBiographyPages?: boolean;
  address?: Address_3;
}

export enum C_teamDisplay {
  FUNCTIONAL_TITLE = "Functional Title",
  RECOGNITION_AND_FUNCTIONAL_TITLE = "Recognition and Functional Title",
}

export interface C_teamNameAndSite {
  teamName?: string;
  teamSite?: string;
  teamEntityId?: number;
}

export enum C_tempRemoveFromMatch {
  YES__TEMPORARILY_REMOVE_FROM_MATCH = "Yes, temporarily remove from Match",
  NO = "No",
}

export enum C_template {
  CITY_SCAPE = "City scape",
  HORIZON = "Horizon",
}

export enum C_titleDisplay {
  FUNCTIONAL_TITLE = "Functional Title",
  RECOGNITION_TITLE_AND_FUNCTIONAL_TITLE = "Recognition Title and Functional Title",
}

export enum SlugManagerIgnore {
  Yes__ignore = "Yes, ignore",
  No = "No",
}

export interface C_uRLSlugOverride {
  slugManagerIgnore?: SlugManagerIgnore;
  slugOverrideText?: string;
}

export interface C_volunteering {
  organization?: string;
  role?: string;
  causes?: string;
  description?: string;
  startMonthAndYear?: string;
}

export enum Type_3 {
  NONE = "None",
  BOOK_NOW = "Book Now",
  CALL_NOW = "Call Now",
  CONTACT_US = "Contact Us",
  SEND_MESSAGE = "Send Message",
  USE_APP = "Use App",
  PLAY_GAME = "Play Game",
  SHOP_NOW = "Shop Now",
  SIGN_UP = "Sign Up",
  WATCH_VIDEO = "Watch Video",
  SEND_EMAIL = "Send Email",
  LEARN_MORE = "Learn More",
  PURCHASE_GIFT_CARDS = "Purchase Gift Cards",
  ORDER_NOW = "Order Now",
  FOLLOW_PAGE = "Follow Page",
}

export interface FacebookCallToAction {
  type: Type_3;
  value?: string;
}

export interface FeaturedMessage {
  description?: string;
  url?: string;
}

export interface MenuUrl {
  url?: string;
  displayUrl?: string;
  preferDisplayUrl?: boolean;
}

export interface OrderUrl {
  url?: string;
  displayUrl?: string;
  preferDisplayUrl?: boolean;
}

export enum PaymentOptions {
  AFTERPAY = "Afterpay",
  ALIPAY = "AliPay",
  AMERICANEXPRESS = "American Express",
  ANDROIDPAY = "Google Pay",
  APPLEPAY = "Apple Pay",
  ATM = "ATM",
  ATMQUICK = "ATM Quick",
  BACS = "BACS",
  BANCONTACT = "Bancontact",
  BANKDEPOSIT = "Bank Deposit",
  BANKPAY = "Bank Pay",
  BGO = "Bank/Giro Overschrijving",
  BITCOIN = "Bitcoin",
  Bar = "Bargeld",
  CARTASI = "CartaSi",
  CASH = "Cash",
  CCS = "CCS",
  CHECK = "Check",
  CONB = "Contactloos betalen",
  CONTACTLESSPAYME = "Contactless Payment",
  CVVV = "Cadeaubon/VVV bon",
  DEBITNOTE = "Debit Note",
  DINERSCLUB = "Diners Club",
  DIRECTDEBIT = "Direct Debit",
  DISCOVER = "Discover",
  ECKARTE = "Girokarte",
  ECOCHEQUE = "EcoCheque",
  EKENA = "E-kena",
  EMV = "Elektronische Maaltijdcheques",
  FINANCING = "Financing",
  GOPAY = "GoPay",
  HAYAKAKEN = "Hayakaken",
  HEBAG = "He-Bag",
  IBOD = "iBOD",
  ICCARDS = "IC Cards",
  ICOCA = "Icoca",
  ID = "iD",
  IDEAL = "iDeal",
  INCA = "Incasso",
  INVOICE = "Invoice",
  JCB = "JCB",
  JCoinPay = "J−Coin Pay",
  JKOPAY = "JKO Pay",
  KITACA = "Kitaca",
  KLA = "Klantenkaart",
  KLARNA = "Klarna",
  LINEPAY = "LINE Pay",
  MAESTRO = "Maestro",
  MANACA = "Manaca",
  MASTERCARD = "MasterCard",
  MIPAY = "Mi Pay",
  MONIZZE = "Monizze",
  MPAY = "MPay",
  Manuelle_Lastsch = "Manuelle Lastschrift",
  Merpay = "メルPay",
  NANACO = "nanaco",
  NEXI = "Nexi",
  NIMOCA = "Nimoca",
  OREM = "Onder Rembours",
  PASMO = "Pasmo",
  PAYBACKPAY = "Payback Pay",
  PAYBOX = "Paybox",
  PAYCONIQ = "Payconiq",
  PAYPAL = "PayPal",
  PAYPAY = "PayPay",
  PAYSEC = "PaySec",
  PIN = "PIN",
  POSTEPAY = "Postepay",
  QRCODE = "QR Code Payment",
  QUICPAY = "QUICPay",
  RAKUTENEDY = "Rakuten Edy",
  RakutenPay = "楽天Pay",
  SAMSUNGPAY = "Samsung Pay",
  SODEXO = "Sodexo",
  SUGOCA = "Sugoca",
  SUICA = "Suica",
  SWISH = "Swish",
  TICKETRESTAURANT = "Ticket Restaurant",
  TOICA = "Toica",
  TRAVELERSCHECK = "Traveler's Check",
  TSCUBIC = "TS CUBIC",
  TWINT = "Twint",
  UNIONPAY = "China UnionPay",
  VEV = "Via een verzekering",
  VISA = "Visa",
  VISAELECTRON = "Visa Electron",
  VOB = "Vooruit betalen",
  VOUCHER = "Voucher",
  VPAY = "V PAY",
  WAON = "WAON",
  WECHATPAY = "WeChat Pay",
  WIRETRANSFER = "Wire Transfer",
  Yucho_Pay = "ゆうちょPay",
  ZELLE = "Zelle",
  AuPay = "auPay",
  DBarai = "d払い",
  Überweisung = "Banküberweisung",
}

export interface RankTrackingCompetitors {
  name: string;
  website: string;
}

export enum RankTrackingFrequency {
  WEEKLY = "Weekly",
  MONTHLY = "Monthly",
  QUARTERLY = "Quarterly",
}

export enum RankTrackingKeywords {
  NAME = "Name",
  PRIMARY_CATEGORY = "Primary Category",
  SECONDARY_CATEGORY = "Secondary Category",
}

export enum RankTrackingQueryTemplates {
  KEYWORD = "Keyword",
  KEYWORD_ZIP = "Keyword Zip",
  KEYWORD_CITY = "Keyword City",
  KEYWORD_IN_CITY = "Keyword in City",
  KEYWORD_NEAR_ME = "Keyword near me",
  KEYWORD_CITY_STATE = "Keyword City State",
}

export enum RankTrackingSites {
  GOOGLE_DESKTOP = "Google Desktop",
  GOOGLE_MOBILE = "Google Mobile",
  BING_DESKTOP = "Bing Desktop",
  BING_MOBILE = "Bing Mobile",
  YAHOO_DESKTOP = "Yahoo Desktop",
  YAHOO_MOBILE = "Yahoo Mobile",
}

export interface ReservationUrl {
  url?: string;
  displayUrl?: string;
  preferDisplayUrl?: boolean;
}

export interface WebsiteUrl {
  url?: string;
  displayUrl?: string;
  preferDisplayUrl?: boolean;
}

export interface ComplexVideo {
  url: string;
  video?: string;
  description?: string;
}

export default interface FinancialProfessional {
  appleActionLinks?: AppleActionLinks[];
  appleBusinessDescription?: string;
  appleBusinessId?: string;
  appleBusinessIdDqe?: string;
  appleCompanyId?: string;
  appleCompanyIdDqe?: string;
  appleCoverPhoto?: Image;
  appointmentOnly?: boolean;
  awards?: string[];
  bingWebsiteOverride?: string;
  questionsAndAnswers?: boolean;
  disclosureLink?: string;
  facebookAbout?: string;
  facebookWebsiteOverride?: string;
  frequentlyAskedQuestions?: FrequentlyAskedQuestions[];
  geomodifier?: string;
  googleEntityRelationship?: GoogleEntityRelationship;
  googleMyBusinessLabels?: string[];
  googlePlaceId?: string;
  googleShortName?: string;
  hobbies?: string[];
  holidayHoursConversationEnabled?: boolean;
  impressum?: string;
  interests?: string[];
  landingPageUrl?: string;
  linkedInUrl?: string;
  neighborhood?: string;
  nmlsNumber?: string;
  nudgeEnabled?: boolean;
  onlineServiceHours?: Hours;
  primaryConversationContact?: any;
  reviewResponseConversationEnabled?: boolean;
  serviceAreaPlaces?: ServiceAreaPlaces[];
  slug?: string;
  teamName?: string;
  what3WordsAddress?: string;
  yearsOfExperience?: number;
  yelpLinkedAccount?: any;
  yelpWebsiteOverride?: string;
  additionalHoursText?: string;
  address: Address;
  addressHidden?: boolean;
  alternatePhone?: any;
  androidAppUrl?: string;
  associations?: string[];
  brands?: string[];
  description?: string;
  hours?: Hours;
  logo?: ComplexImage;
  name: string;
  categories?: any;
  certifications?: string[];
  cityCoordinate?: Coordinate;
  closed?: boolean;
  c_30MinuteConsultations?: boolean;
  c_aboutAdvisorHeadline?: string;
  c_aboutAdvisorShortDescription?: string;
  c_activeOnPages?: C_activeOnPages;
  c_addressAdditionalInformation?: string;
  c_advisorAddress?: C_advisorAddress;
  c_advisorBio?: string;
  c_advisorDisplayOrder?: string[];
  c_advisorFirstName?: string;
  c_advisorLastName?: string;
  c_advisorNickname?: string;
  c_advisorPageOptIn?: C_advisorPageOptIn;
  c_advisorWebsiteTitle?: string;
  c_articlesDisplay?: C_articlesDisplay[];
  c_articlesHeadline?: string;
  c_assetRanges?: C_assetRanges;
  c_assignBaseLicenses?: boolean;
  c_associatedBlogs?: EntityReference[];
  c_associatedClientStories?: EntityReference[];
  c_associatedFAQs?: EntityReference[];
  c_associatedInsights?: EntityReference[];
  c_associatedSolutions?: EntityReference[];
  c_associatedTeam?: EntityReference[];
  c_attestation?: C_attestation;
  c_awardDisclosureBioCTA?: C_awardDisclosureBioCTA;
  c_awardDisclosureCTA?: C_awardDisclosureCTA;
  c_awards?: C_awards[];
  c_awardsDashboard?: C_awardsDashboard[];
  c_awardsDisclosure?: C_awardsDisclosure;
  c_awardsDisclosureUpdate?: C_awardsDisclosureUpdate[];
  c_awardsDisclosures?: string;
  c_awardsDisplay?: C_awardsDisplay[];
  c_awardsWithDisclosure?: C_awardsWithDisclosure[];
  c_bACHash?: string;
  c_background?: string;
  c_bioCommunityServiceStatement?: string;
  c_bossEmpID9?: string;
  c_breadcrumbText?: string;
  c_broadridgeMigrationExpirationDates?: C_broadridgeMigrationExpirationDates;
  c_businessUnit?: C_businessUnit;
  c_cFSubmissions?: string;
  c_charts?: number;
  c_clientChatAndTexting?: boolean;
  c_clientFocuses?: C_clientFocuses[];
  c_clientFocusesReorder?: string[];
  c_combinedFlexibleHeaderSection?: string;
  c_contactLabel?: string;
  c_continuedAboutTitle?: string;
  c_conversationFocus?: number;
  c_conversationPreference?: number;
  c_currentPositionStartDate?: string;
  c_currentPositionSummary?: string;
  c_dAFlag?: boolean;
  c_dashboardPagesURLText?: string;
  c_designations?: C_designations[];
  c_designationsWithSuperscript?: string;
  c_detail?: number;
  c_directoryPhoto?: Image;
  c_disagreements?: number;
  c_disclosures?: string[];
  c_displayTeamName?: boolean;
  c_districtCode?: string;
  c_districtName?: C_districtName;
  c_education?: C_education[];
  c_educationDisplay?: C_educationDisplay[];
  c_entityTypeCustomField?: C_entityTypeCustomField;
  c_events?: C_events[];
  c_eventsHeadline?: string;
  c_eventsOLD?: C_eventsOLD[];
  c_exemptFromETL?: boolean;
  c_experienceDisplay?: C_experienceDisplay;
  c_fAQHeadingMobile?: string;
  c_firmLevelOfExperience?: number;
  c_expertiseComments?: string;
  c_expertiseCommentsRTv2?: any;
  c_fullBiographyPages?: C_fullBiographyPages[];
  c_fullBiographyPagesMarkdown?: C_fullBiographyPagesMarkdown[];
  c_generatedSpanishBio?: string;
  c_getInTouchLabel2?: string;
  c_hasAboutAdvisorShortDescription?: C_hasAboutAdvisorShortDescription;
  c_hasExpertiseComments?: C_hasExpertiseComments;
  c_hasFullBiographyPages?: C_hasFullBiographyPages;
  c_hasFullBiographyPagesMarkdown?: C_hasFullBiographyPagesMarkdown;
  c_hasHeroPicture?: C_hasHeroPicture;
  c_hasHeroQuote?: C_hasHeroQuote;
  c_hasIndividualWebsite?: C_hasIndividualWebsite;
  c_hasPagesFlexibleHeadersSection?: C_hasPagesFlexibleHeadersSection;
  c_hasProfilePicture?: C_hasProfilePicture;
  c_hasTeamWebsite?: C_hasTeamWebsite;
  c_headline1?: string;
  c_headline2?: string;
  c_headline3?: string;
  c_headline4?: string;
  c_heroBanner?: C_heroBanner;
  c_heroPicture?: Image;
  c_heroQuote?: string;
  c_hideLinkedTeam?: boolean;
  c_hobbiesAndInterests?: C_hobbiesAndInterests[];
  c_hobbiesHeadline?: string;
  c_homeRepairs?: C_homeRepairs;
  c_honorsHeadline?: string;
  c_inGoodStanding?: boolean;
  c_inTouchPreference?: C_inTouchPreference;
  c_industryLevelOfExperience?: number;
  c_fAQs1?: C_fAQs1[];
  c_interviewQuestions1?: C_interviewQuestions1[];
  c_fAQs?: C_fAQs[];
  c_introvertedOrExtroverted?: number;
  c_jobCode?: string;
  c_jobTitle?: string;
  c_jobTitleAbbreviation?: string;
  c_kalturaVideo?: C_kalturaVideo[];
  c_keyContacts?: C_keyContacts[];
  c_laidBack?: number;
  c_language?: C_language[];
  c_languagesAttestation?: C_languagesAttestation;
  c_languagesUniverse?: C_languagesUniverse[];
  c_languagesV2?: string[];
  c_lineOfBusiness?: C_lineOfBusiness;
  c_linkedBranch?: EntityReference[];
  c_linkedBranchID?: string;
  c_linkedFinancialProfessionals?: EntityReference[];
  c_linkedFinancialProfessionalsIDs?: string[];
  c_linkedTeam?: EntityReference[];
  c_linkedTeamEntityID?: string;
  c_linkedTeamEntityIDs?: string[];
  c_linkedTeamHasWebsite?: C_linkedTeamHasWebsite;
  c_linkedTeamOwner?: EntityReference[];
  c_linkedTeamOwnerEntityID?: string;
  c_managerPersonNumber?: string;
  c_manualPublishComplete?: C_manualPublishComplete;
  c_marketCode?: string;
  c_marketName?: string;
  c_marketingName?: string;
  c_matchAppearances?: string;
  c_matchComplete?: boolean;
  c_matchFinderPhoto?: Image;
  c_meetingPlacePreference?: number;
  c_meetingPreference?: number;
  c_meetingTime?: number;
  c_meta?: C_meta;
  c_metaDescription?: string;
  c_metaTitle?: string;
  c_mFSAActiveOnPages?: C_mFSAActiveOnPages;
  c_mfsaAdvisor?: boolean;
  c_middleNames?: string;
  c_newPagesURL?: string;
  c_officeCenterCode?: string;
  c_officeCenterName?: string;
  c_onLeave?: boolean;
  c_organizations?: C_organizations[];
  c_organizationsDisplay?: string[];
  c_organizationsHeadline?: string;
  c_pageSectionReordering?: string[];
  c_pagesFlexibleHeaderSection?: C_pagesFlexibleHeaderSection[];
  c_pagesMarketingSection?: C_pagesMarketingSection[];
  c_pagesPilotEntity?: C_pagesPilotEntity;
  c_pagesURL?: string;
  c_phoneNumberFormatted?: string;
  c_photoGallery?: Image[];
  c_photoTest?: Image;
  c_planning?: number;
  c_preferredFirstName?: string;
  c_preferredLinkedTeam?: EntityReference[];
  c_producerID?: string;
  c_professionalStaff?: C_professionalStaff[];
  c_profileDelegates?: C_profileDelegates[];
  c_profilePicture?: Image;
  c_profileVideo?: C_profileVideo[];
  c_quarterlyOfficeMeeting?: C_quarterlyOfficeMeeting;
  c_rawHeadshotURL?: string;
  c_rawProfilePictureURL?: string;
  c_recognitionTitle?: string;
  c_recommendations?: number;
  c_registrations?: C_registrations[];
  c_sECProfileURL?: string;
  c_sEOURL?: string;
  c_spanishBio?: any;
  c_specialists?: C_specialists[];
  c_stagingURL?: string;
  c_t5Appearances?: string;
  c_teamDescription?: string;
  c_teamDescriptionRTv2?: any;
  c_teamDisplay?: C_teamDisplay;
  c_teamName?: string;
  c_teamNameAndSite?: C_teamNameAndSite[];
  c_teamPhotoGallery?: Image[];
  c_teamSectionTitle?: string;
  c_tempRemoveFromMatch?: C_tempRemoveFromMatch;
  c_template?: C_template;
  c_titleDisplay?: C_titleDisplay;
  c_uRLSlugOverride?: C_uRLSlugOverride;
  c_vanityURL?: string[];
  c_volunteerHeadline?: string;
  c_volunteering?: C_volunteering[];
  c_volunteeringDisplay?: string[];
  c_webExMeetings?: boolean;
  firstPartyReviewPage?: any;
  reviewGenerationUrl?: any;
  defaultReviewInviteTemplate?: any;
  displayCoordinate?: Coordinate;
  dropoffCoordinate?: Coordinate;
  emails?: string[];
  facebookOverrideCity?: string;
  facebookCoverPhoto?: Image;
  facebookCallToAction?: FacebookCallToAction;
  facebookDescriptor?: string;
  facebookLinkedAccount?: any;
  facebookName?: string;
  facebookPageUrl?: string;
  facebookParentPageId?: string;
  facebookProfilePhoto?: Image;
  facebookStoreId?: string;
  facebookVanityUrl?: string;
  fax?: any;
  featuredMessage?: FeaturedMessage;
  photoGallery?: ComplexImage[];
  geocodedCoordinate?: Coordinate;
  gmbLinkedAccount?: any;
  googleAccountId?: string;
  googleAttributes?: any;
  googleCoverPhoto?: Image;
  googleProfilePhoto?: Image;
  googleWebsiteOverride?: string;
  headshot?: Image;
  instagramHandle?: string;
  iosAppUrl?: string;
  isoRegionCode?: string;
  keywords?: string[];
  languages?: string[];
  localPhone?: any;
  mainPhone?: any;
  menuUrl?: MenuUrl;
  mobilePhone?: any;
  orderUrl?: OrderUrl;
  paymentOptions?: PaymentOptions[];
  pickupCoordinate?: Coordinate;
  products?: string[];
  alternateNames?: string[];
  alternateWebsites?: string[];
  rankTrackingCompetitors?: RankTrackingCompetitors[];
  customKeywords?: string[];
  rankTrackingEnabled?: boolean;
  rankTrackingFrequency?: RankTrackingFrequency;
  rankTrackingKeywords?: RankTrackingKeywords[];
  rankTrackingQueryTemplates?: RankTrackingQueryTemplates[];
  rankTrackingSites?: RankTrackingSites[];
  reservationUrl?: ReservationUrl;
  routableCoordinate?: Coordinate;
  services?: string[];
  specialities?: string[];
  id: string;
  timezone?: any;
  tollFreePhone?: any;
  ttyPhone?: any;
  twitterHandle?: string;
  walkableCoordinate?: Coordinate;
  websiteUrl?: WebsiteUrl;
  yextDisplayCoordinate?: Coordinate;
  yextDropoffCoordinate?: Coordinate;
  yextPickupCoordinate?: Coordinate;
  yextRoutableCoordinate?: Coordinate;
  yextWalkableCoordinate?: Coordinate;
  videos?: ComplexVideo[];
}
