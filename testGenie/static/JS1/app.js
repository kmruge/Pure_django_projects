
const rows = document.querySelectorAll('tr');
    rows.forEach(row => {
      const actions = row.querySelector('.actions');
      row.addEventListener('mouseenter', () => {
        actions.style.opacity = 1;
      });
      row.addEventListener('mouseleave', () => {
        actions.style.opacity = 0;
      });
    });

function toggleSearchResults() {
    document.getElementById('searchtable').style.display = "none";
}

function currentdateandtime()
{

    // program to display the date
// get local machine date time
const date = new Date();

// get the date as a string
const n = date.toDateString();

// get the time as a string
const time = date.toLocaleTimeString();

document.getElementById("dateandtime").innerHTML = n + " " + time;

}
  setInterval(currentdateandtime, 100);

const subjects = ["Unable to connect to Wi-Fi", "Issue with email delivery", "Computer freezing frequently", "Need help with Microsoft Office", "Slow internet connection", "Printer not responding", "Need help resetting password", "Unable to access certain websites", "Problem with audio output", "Display issue with monitor", "Software crashing frequently", "Virus/malware on computer", "Unable to open specific files", "Need help with video conferencing", "Slow computer performance", "Problem with keyboard", "Unable to download files", "Issue with backup and restore", "Problem with USB device", "Need help with cloud storage", "Unable to access shared folders", "Problem with network connection", "Need help with data recovery", "Problem with graphics card", "Unable to connect to VPN", "Need help with email setup", "Unable to play specific media files", "Problem with power supply", "Need help with antivirus software", "Issue with web browser", "Unable to access email", "Need help with remote access", "Problem with operating system", "Unable to start up computer", "Need help with database management", "Problem with mobile device", "Need help with software updates", "Unable to access intranet", "Need help with virtualization", "Problem with website", "Need help with content management system", "Unable to access database", "Need help with server management", "Problem with server hardware", "Unable to access cloud services", "Need help with website hosting", "Problem with network security", "Unable to access customer portal", "Need help with e-commerce platform"];
const bodies = ["Hello,\n\nI am unable to connect to the Wi-Fi network in our office. Could you please help me troubleshoot the issue?", "Hi,\n\nI sent an email to a colleague, but they haven't received it yet. Can you please check if there's an issue with email delivery?", "Hi support team,\n\nMy computer has been freezing frequently for the past few days. Can you please help me diagnose the issue?", "Hi,\n\nI need help with Microsoft Office. Specifically, I am having trouble with Excel formulas. Could you please guide me through the process?", "Hi,\n\nMy internet connection has been very slow lately. Could you please help me troubleshoot the issue?", "Hi support team,\n\nI am having trouble getting my printer to respond. I have tried turning it on and off, but it still doesn't seem to be working.", "Hi,\n\nI forgot my password and I am unable to reset it. Can you please help me reset my password so that I can log in to my account?", "Hi,\n\nI am unable to access certain websites. Could you please help me troubleshoot the issue?", "Hi,\n\nThere's a problem with the audio output on my computer. Could you please help me resolve it?", "Hi,\n\nThere's a display issue with my monitor. Could you please help me troubleshoot the issue?", "Hi support team,\n\nThe software I'm using keeps crashing frequently. Could you please help me diagnose the issue?", "Hi,\n\nI think there's a virus or malware on my computer. Could you please help me remove it?", "Hi,\n\nI am unable to open specific files on my computer. Could you please help me troubleshoot the issue?", "Hi,\n\nI need help with video conferencing. Could you please guide me through the process?", "Hi,\n\nMy computer has been running very slowly lately. Could you please help me diagnose the issue?", "Hi,\n\nI'm having a problem with my keyboard. Some of the keys don't seem to be working. Could you please help me troubleshoot the issue?", "Hi,\n\nI am unable to download files from the internet. Could you please help me troubleshoot the issue?", "Hi,\n\nI am having an issue with backup and restore. Could you please help me troubleshoot the issue?", "Hi,\n\nThere's a problem with a USB device that I'm trying to connect to my computer. Could you please help me troubleshoot the issue?", "Hi,\n\nI need help with cloud storage. Specifically, I am having trouble syncing my files. Could you please help me troubleshoot the issue?", "Hi,\n\nI am unable to access shared folders on our network. Could you please help me troubleshoot the issue?", "Hi support team,\n\nI am having trouble with my network connection. Could you please help me troubleshoot the issue?", "Hi,\n\nI need help with data recovery. I accidentally deleted some important files and I need to get them back. Could you please help me?", "Hi,\n\nI am having a problem with my graphics card. Could you please help me troubleshoot the issue?", "Hi support team,\n\nI am unable to connect to the VPN. Could you please help me troubleshoot the issue?", "Hi,\n\nI need help setting up my email account on a new device. Could you please guide me through the process?", "Hi,\n\nI am unable to play specific media files on my computer. Could you please help me troubleshoot the issue?"];
const contactnames = [  'Emma', 'Olivia', 'Ava', 'Isabella', 'Sophia', 'Mia', 'Charlotte', 'Amelia', 'Harper', 'Evelyn',  'Abigail', 'Emily', 'Elizabeth', 'Mila', 'Ella', 'Avery', 'Sofia', 'Camila', 'Aria', 'Scarlett',  'Victoria', 'Madison', 'Luna', 'Grace', 'Chloe', 'Penelope', 'Layla', 'Riley', 'Zoey', 'Nora',  'Lily', 'Eleanor', 'Hannah', 'Lillian', 'Addison', 'Aubrey', 'Ellie', 'Stella', 'Natalie', 'Zoe',  'Leah', 'Hazuki', 'Akira', 'Arisa', 'Haru', 'Kaito', 'Ren', 'Yui', 'Ayato', 'Abby', 'Adeline',  'Aileen', 'Aisha', 'Aisling', 'Alessia', 'Alexa', 'Alexandra', 'Alexis', 'Aliyah', 'Alondra', 'Althea',  'Amalia', 'Amanda', 'Amani', 'Amelie', 'America', 'Amethyst', 'Amira', 'Anabelle', 'Angel', 'Angela',  'Angelina', 'Ann', 'Anna', 'Annabelle', 'Annalise', 'Anne', 'Annie', 'Anya', 'Aphrodite', 'April',  'Aria', 'Ariana', 'Arianna', 'Ariel', 'Arielle', 'Artemis', 'Ash', 'Ashley', 'Aspen', 'Aster',  'Astrid', 'Athena', 'Audrey', 'Aurora', 'Autumn', 'Ava', 'Avery', 'Aviana', 'Aviva', 'Azalea',  'Barbara', 'Beatrice', 'Bella', 'Belle', 'Bernadette', 'Betsy', 'Betty', 'Bianca', 'Billie', 'Blair',  'Blake', 'Blossom', 'Blythe', 'Bobbie', 'Bonnie', 'Bree', 'Brenda', 'Bridget', 'Brigid', 'Brigitte',  'Briana', 'Brianna', 'Bridie', 'Brittany', 'Brooke', 'Brynn', 'Buffy', 'Caitlin', 'Caitlyn', 'Cali',  'Callie', 'Cameron', 'Camille', 'Candace', 'Candice', 'Caprice', 'Cara', 'Carina', 'Carla', 'Carly',  'Carmela', 'Carmen', 'Carol', 'Carolina', 'Caroline', 'Carolyn', 'Carrie', 'Cassandra', 'Cassidy', 'Cassie',  'Catalina', 'Catherine', 'Cathy', 'Cecelia', 'Cecilia', 'Celeste', 'Celia', 'Celina', 'Chanel', 'Chantal',  'Charity', 'Charlene', 'Charlotte', 'Charmaine', 'Chastity', 'Chelsea', 'Cherie', 'Cherry', 'Cheryl', 'Cheyenne'];
const systemAssets = ["WindowsWorx", "macOSMax", "LinuxLion", "AndroidAce", "iOSInfinity", "XboxXcel", "PlayStationPulse", "NintendoNova", "ChromebookChampion", "TeslaTech", "SmartHomeSavvy", "VirtualRealityVault", "CybersecurityShield", "CloudComputingCrown", "AIAdvantage", "JavaJive", "RubyRise", "PythonPower", "SwiftSonic", "CSharpSprint", "GoGalaxy", "PHPPhoenix", "ReactRocket", "AngularAmp", "VueVision", "NodeNimble", "DockerDash", "KubernetesKing", "ApacheArrow", "NginxNimble", "MySQLMastery", "PostgreSQLPinnacle", "MongoDBMarvel", "RedisRage", "ElasticsearchExcellence", "TensorFlowTitan", "PyTorchPowerhouse", "KerasKlassic", "SciPySuperior", "PandasPrestige", "NumPyNexus", "MatplotlibMaster", "PlotlyParagon", "SeabornSupreme", "PowerBIPowerhouse", "TableauTopaz", "QlikQuest", "SAPSuccess", "SalesforceSupreme", "OracleOasis", "IBMInnovation", "HPHero", "DellDynamo", "LenovoLegend", "AsusAura", "MSIMasterpiece", "NvidiaNoble", "AMDAlpha", "IntelIcon", "QualcommQuantum", "SamsungSupernova", "LGLegacy", "SonySensational", "CanonChampion", "NikonNimble", "FujifilmFusion", "GoProGreatness", "FitbitFrenzy", "AppleAirPods", "BoseBrilliance", "SennheiserSupreme", "BeatsBlast", "SonySonic", "JBLJewel", "LogitechLegend", "RazerRage", "CorsairChampion", "HyperXHero", "SteelSeriesSupreme", "KingstonKingdom", "SanDiskSupreme", "WesternDigitalWonder", "SeagateSupremacy", "DropboxDominion", "GoogleDriveGuru", "OneDriveOracle", "iCloudIcon", "BoxBrilliance", "GitGuru", "GitHubGreatness", "BitbucketBlast", "JiraJuggernaut", "TrelloTitan", "SlackSupreme", "AsanaAce", "NotionNexus", "EvernoteExcellence", "ZoomZenith", "SkypeSupernova", "WhatsAppWonder"];
const domains = ['fakemail.com', 'notarealmail.net', 'fictitious.org', 'phonyemail.biz', 'mockmail.co', 'dummydomain.info', 'bogusmail.net', 'pretendmail.com', 'makebelieve.org', 'fauxmail.net', 'counterfeitmail.com', 'unrealmail.net', 'fakeinbox.com', 'imaginarymail.net', 'dummyemail.com', 'phonydomain.net', 'falsemail.com', 'pseudoemail.net', 'fabricatedmail.net', 'spuriousmail.com', 'mockdomain.com', 'fakeaddress.net', 'fictitiousmail.com', 'fakehosting.com', 'counterfeitmail.net', 'bogusemail.net', 'pretendmail.net', 'notrealmail.net', 'dummydomain.com', 'imaginarymail.com', 'fauxmail.com', 'makebelievemail.net', 'unrealmail.com', 'fakeinbox.net', 'phonyemail.net', 'fakeprovider.net', 'fabricatedmail.com', 'fakepost.net', 'mockemail.com', 'falsemail.net', 'pseudoemail.com', 'fakehost.net', 'spuriousmail.net', 'bogusmail.net', 'phonyinbox.com', 'fictitiousdomain.net', 'counterfeitmail.org', 'pretendmail.org', 'makebelieve.net', 'fauxemail.net', 'imaginarymail.org', 'dummyemail.net', 'notarealmail.com', 'phonydomain.com', 'falsemail.org', 'pseudoemail.org', 'bogusemail.com', 'spuriousmail.org', 'fabricatedmail.net', 'unrealmail.org', 'mockdomain.net', 'fakeaddress.com', 'fictitiousmail.net', 'fakehosting.net', 'dummydomain.net', 'counterfeitmail.co', 'pretendemail.com', 'makebelieve.com', 'fauxmail.org', 'imaginarymail.com', 'phonyemail.com', 'notrealmail.com', 'fakeinbox.net', 'unrealmail.net', 'fakeprovider.com', 'fabricatedmail.org', 'spuriousmail.com', 'phonyinbox.net', 'fakepost.com', 'bogusmail.org', 'fictitiousdomain.com', 'counterfeitmail.net', 'pretendmail.net', 'makebelieve.org', 'fauxemail.com', 'imaginarymail.net', 'dummyemail.com', 'notarealmail.net', 'phonydomain.net', 'falsemail.net', 'pseudoemail.net', 'spuriousmail.net', 'fabricatedmail.com', 'unrealmail.net', 'mockemail.net', 'fakehost.net', 'phonyemail.net', 'fakeinbox.com', 'fictitiousmail.org', 'fakeaddress.net', 'dummydomain.net', 'counterfeitmail.com', 'pretendemail.net', 'makebelieve.net', 'fauxmail.net', 'imaginarymail.co', 'notrealmail.net'];  
const statusOptions = [  'Open', 'In Progress', 'On Hold', 'Closed', 'Resolved', 'Cancelled',  'Pending', 'Waiting for Response', 'In Review', 'Approved', 'Rejected',  'Deferred', 'Awaiting User', 'Awaiting Third Party', 'Escalated', 'Not Started',  'Blocked', 'Resolved by User', 'Resolved by Third Party', 'Duplicate', 'Completed',  'Archived', 'Under Investigation', 'Under Review', 'Waiting for Parts',  'Scheduled', 'Cancelled by User', 'Cancelled by Third Party', 'Declined', 'Solved',  'In Queue', 'In Testing', 'Ready for Deployment', 'Deployed', 'Not Reproducible',  'Not a Bug', 'Bug Confirmed', 'Bug Reported', 'New', 'Awaiting Approval',  'Approved for Development', 'In Development', 'Testing', 'Pending Release',  'Released', 'Upgrade Required', 'Downgraded', 'Rejected by User', 'Rejected by Third Party',  'Postponed', 'Merged', 'Blocked by User', 'Blocked by Third Party', 'Awaiting Feedback',  'Underway', 'Invalid', 'Awaiting Client Response', 'In Production', 'In Discussion',  'Planning', 'Design', 'Cancelled by Client', 'Cancelled by Contractor', 'Terminated',  'Withdrawn', 'No Action Required', 'Action Required', 'Not Assigned', 'Assigned',  'Resolved by Contractor', 'Resolved by Client', 'Awaiting Closure', 'Awaiting Verification',  'Verified', 'Not Resolved', 'Ready for Testing', 'Testing Failed', 'Testing Successful',  'In Remediation', 'Remediated', 'Not Remediated', 'Reopened', 'Awaiting Support',  'In Transit', 'Pending Resolution', 'Resolved with Workaround', 'Improper Use',  'User Error', 'Authentication Failure', 'Application Error', 'System Failure',  'Third Party Failure', 'Hardware Failure', 'Data Corruption', 'Not Applicable',  'Misconfiguration', 'Unavailable', 'Degraded Performance', 'Security Issue'];
const possiblePriorities = [  'High',  'Low',  'Medium',  'Urgent',  'Critical',  'Important',  'Normal',  'Minor',  'Major',  'Blocker',  'Trivial',  'Showstopper',  'Top',  'Bottom',  'Essential',  'Optional',  'Fixed',  'Unfixed',  'Serious',  'Cosmetic',  'Advanced',  'Basic',  'Enhancement',  'Regression',  'Invalid',  'Duplicate',  'Wontfix',  'Workaround',  'Confirmed',  'Critical Path',  'Progress',  'On Hold',  'Reopen',  'Resolved',  'Triaged',  'Ready',  'In Progress',  'Testing',  'Code Review',  'Blocked',  'Closed',  'Accepted',  'Assigned',  'Deferred',  'Done',  'Duplicate',  'Fixed and Verified',  'New',  'Not a Bug',  'Postponed',  'Rejected',  'Released',  'To Do',  'Unconfirmed',  'Waiting',  'Wont Fix',  'Cant Fix',  'Critical',  'Important',  'Normal',  'Minor',  'Trivial',  'Bug'];

let currentPage = 1;
let data = "";
let tcurrentPage = 1;
const perPage = 50;
let random_ticket = false;
  let limit=50;
let result = {};
let tickets = [];
let objects = [];
let csfieldsdata = {};
let ccsfieldsdata = {};
let tcsfieldsdata = {};
let select;
let subdomain, domain =  null;
let categories, csfields, febranches = {};
let categoryids, unassociated_brand_categoryids=[];
let sCategory, sBrandCategory, sStatus, sPriority, sContact, sCSfield = ""; 
let token = "";
var progress;
var billing_api = "https://billing.hfstaging.net/api/v1/"
var billing_token = "st-xxxxx-xxx-xxx-xxxx-xxxx"
let febranch, billing_status, beBranch= null;
let profiledetails = {}
let ticketdetails = {}
let staffids=[];
var featureflags = ["account_lockout","advanced_audit_logs","advanced_search","agent_collision","agent_scripting","aircall","allowed_plans","any","api_rate_limit","api_ratelimiting","api","asana","asset_types","assets","attachment_size_limit","auto_assignment_with_load_balance","auto_assignment","auto_time_spent_timer","available_time","azure_active_directory","azure_devops_status_sync","azure_devops","azure_exclude_authncontext","background_report_export","background_update_elasticsearch","baremetrics","basic_audit_logs","bigcommerce_integration","block_trial_restrictions","call_notes","canned_actions","categories_limit","category_contactgroup_association","channels","chargify_integration","chartmogul","clearbit","configurable_channels","contact_audit_logs","contact_group_articles","contact_group_custom_fields","contact_groups","contact_widget","content_security_policy_enabled","content_security_policy","credit_card_expires_on","crm_integration","csp_settings","current_period_end","current_period_start","custom_dashboard","custom_domain_multibrand_limit","custom_fields","custom_notification_template","custom_priority","custom_roles","custom_status","custom_views","customer_success_assistance","customise_support_widget","data_privacy","delighted","deny_x_origin_request","dialpad","disable_chargify_subscription_changes","due_by","elasticsearch","email_archiving","Enterprise Plus","Enterprise","facebook_integration","facebook_pages_limit","Fantastic","forums","freshbooks_v2","fullcontact","gdpr_consent","github","gitlab","gmail_smtp_xoauth2","google_apps","gplus_integration","hf_university","hf_workflows","hide_hf_branding","hubspot","import_contacts","in_app_custom_domain","in_app_notifications","inventory_management","invoicing_integration","ip_restriction","jamf","jira_integration","just_call","jwt_integration","kanban_view","kb_editor_new","kb","life_cycle_reports","live_chat_integration","magento_integration","magento2","mailchimp_integration","manual_mail_forwarding","max_custom_fields_limit","microsoft_smtp_xoauth2","Mighty","min_staff_count","mixpanel","ms_teams_custom_fields","ms_teams","msdynamics_crm","multi_language_support","multi_language_supported","multibrand_custom_ssl","multibrand_limit","multibranding","multilingual_kb","multilingual_statuses","new_kanban_view","next_assessment_at","okta_integration","optional_email_for_new_ticket","pager_duty","password_security","payment_type","phone_integration","pipedrive-oauth","purchased_licenses_count","realtime_agent_collision","realtime_notification","rebranding","remote_desktop_integration","reports","restrict_reports","ringcentral","salesforce_b2c_contact_autocomplete_limit","salesforce_b2c_max_sites_per_category","salesforce_b2c","salesforce_integration","saml_integration","satisfaction_survey_reports","satisfaction_survey","scheduled_reports","screencast_integration","service_catalog","service_desk_ui","session_timeout","shopify_integration","shopify_multistore_limit","sla_notifications","sla_reports","sla_timer","sla","slack_branding","slack_custom_fields","slack","smartrules","sms_phone_limit","sms","smtp_xoauth2","staff_limit","staff_roles","state","stripe_integration","subscription_info","support_center_code_editor","task_management","themes","ticket_list_auto_refresh","ticket_templates","ticket_unresponded_since","ticket_visible_only_staff","timespent_in_tickets","total_tickets_count","trigger_workflows_from_helpdesk","twitter_accounts_limit","twitter_integration","twitter_premium_accounts_limit","twitter_premium_integration","uncategorized_ticketing","use_alternate_reports_db","v1_switch","v2_accounts","v2_apps","v2_asset_reports","v2_asset_reports","v2_automate","v2_billing_downgrade_dependancy","v2_canned_actions_reports","v2_channels","v2_contact_group_reports","v2_contact_portal","v2_contact_reports","v2_contacts","v2_custom_field_reports","v2_distribution_reports","v2_google_apps_invite","v2_jwt_integration","v2_kb","v2_login","v2_manage","v2_multibranding","v2_performance_reports","v2_purchase_subscription_unlimited","v2_purchase_subscription","v2_reports","v2_satisfaction_survey_reports","v2_scheduled_tickets","v2_sla_reports","v2_smartrule_reports","v2_support_center","v2_support_centre","v2_switch","v2_throttle_limit","v2_time_spent_reports","v2_update_subscription","v2","webhooks","whatsapp","wrike"]
// Open Multiple links


const getNewQuote = async () =>
{
    //api for quotes
    var url="https://type.fit/api/quotes";    

    // fetch the data from api
    const response=await fetch(url);
    console.log(typeof response);
    //convert response to json and store it in quotes array
    const allQuotes = await response.json();

    // Generates a random number between 0 and the length of the quotes array
    const indx = Math.floor(Math.random()*allQuotes.length);

    //Store the quote present at the randomly generated index
    const quote=allQuotes[indx].text;

    //Store the author of the respective quote
    const auth=allQuotes[indx].author;

    if(auth==null)
    {
        author = "Anonymous";
    }

    document.getElementById("quote").innerHTML=quote + " - " + auth;

}

async function sendEmail(){
// Get the input values from the form
const toAddress = document.getElementById('toAddress').value;
const subject = document.getElementById('subject').value;
const body = document.getElementById('body').value;
const nodemailer = require('nodemailer');

// Create a transporter object using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'UserHappyFox@gmail.com',
    pass: 'DannyTest@1234'
  }
});


// Create a message object
const message = {
  from: 'TestGenieEmailer@happyfoxtesting.com',
  to: toAddress,
  subject: subject,
  text: body
};

// Send the email
transporter.sendMail(message, function(err, info) {
  if (err) {
    console.log(err);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}

async function emailer(){
  emailjs.init("zb34oEDBuh_6hyscv");

  const form = document.getElementById("contact-form");
  const sendButton = document.getElementById("send-button");

    event.preventDefault();

    sendButton.innerHTML = "Sending...";
    sendButton.disabled = true;

    emailjs.sendForm("service_a3flhge", "template_trquytj", form)
      .then(() => {
        alert("Your message has been sent!");
        form.reset();
      }, (error) => {
        alert("Oops! Something went wrong: " + error.text);
      })
        sendButton.innerHTML = "Send";
        sendButton.disabled = false;
}


async function open_all_links() {
    window.open("https://dev.happyfox.co/staff/");
    window.open("https://trello.com/login");
    window.open("https://"+document.getElementById('lsub-domain').value+"."+document.getElementById('ldomain').value+"/staff/");
    window.open("https://happyfox.okta.com/");
    window.open("https://support.happyfox.com/staff/tickets/?status=_pending");
}

async function change_url(){
let account_url = "https://"+document.getElementById('lsub-domain').value+"."+document.getElementById('ldomain').value;
    document.getElementById("staffport").setAttribute("href",account_url+"/staff/");
    document.getElementById("contactport").setAttribute("href",account_url+"/home/");
    document.getElementById("stafftickets").setAttribute("href",account_url+"/staff/tickets");
}

function changetype()
  {
    // document.write('option changed!');
    var v=document.getElementById("otype");
    var v1=document.getElementById("typename");
    if(v.value!="Select..")
    {
       v1.style.display='block';
    }
    else
    {
       v1.style.display='none';
    }
  }


 // feature flag automcomplete
 
 function autocomplete(inp, arr) {
    
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    if(inp!=null){
    inp.addEventListener("input", function(e) {
        var a, b, i=0, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
           // (function(i){
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("div");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
       // }(i));
        }
    });
}
if(inp!=null){
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
}
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  } 

async function progressbar() {
  progress = document.getElementById("myprogressBar");   
  var width = 1;
  var identity = setInterval(scene, 20);
  function scene() {
    if (width >= 100) {
      clearInterval(identity);
        document.getElementById("myprogressBar").innerHTML=progress.style.width;
    } else {
      width++;
        document.getElementById("myprogressBar").innerHTML=progress.style.width;
        progress.style.width = width + '%'; 
    }
  }
}

async function loadcomplete()
{
    
progress.style.width = '100%';     
document.getElementById("myprogressBar").innerHTML='Completed!';
    
}


async function getToken(subdomain, username, password) {
    
    
    let data = {
  "username": username,
  "password": password
}

    try {
        let res = await fetch("https://"+subdomain+"."+domain+"/api/v2/staff-login/", {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json'
  },
    body: JSON.stringify(data)
})
        
if(res.status!=200)
    {
        let lresult = await res.json();
        console.error(lresult.non_field_errors);
        document.getElementById("error-message").innerHTML = "Login failed with status " + res.status + " and error " + lresult.non_field_errors;
        document.getElementById('ticketinfo').innerHTML = "Staff Login Failure..." + res.status;
        document.getElementById("loader").style.display = "none";
        return false;
    }
        
document.getElementById("ticketinfo").innerHTML='Congrats you are in...';
document.getElementById("accountlogged").innerHTML = subdomain;
        
return await res.json();
        
    } catch (error) {
        if(error.message.includes("NetworkError"))
        {
            document.getElementById("error-message").innerHTML = "Please enter valid details";
            document.getElementById("loader").style.display = "none";
            return false;
        }
        document.getElementById("error-message").innerHTML = error;
        console.log(error);
        document.getElementById('ticketinfo').innerHTML = "Staff Login Failure..." + res.status;
        document.getElementById("loader").style.display = "none";
        return false;
    }
   
}

function removeOptions(selectElement) {
    var i, L = selectElement.options.length - 1;
    for(i = L; i >= 0; i--) {
       selectElement.remove(i);
    }
    let option = document.createElement("option");
    option.text="Select..."
    option.value="Select..."
    selectElement.appendChild(option);
 }

async function getCategory(subdomain, token) {
    
    removeOptions(document.getElementById("category"));
    removeOptions(document.getElementById("brand_category"));
    let flag=true;
    let offset = 0;
while(flag==true)
{
    try {
        let res = await fetch("https://"+subdomain+"."+domain+"/api/v2/categories/?limit=50&offset="+offset+"&deleted=false", {
  method: 'GET', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + token
  }
})

categories = Object.assign({}, await res.json());
        
    } catch (error) {
        console.log(error);
        
    }
    
categoryids = [];

result = Object.assign({}, categories);
    let select = document.getElementById("category");
    let select_brand = document.getElementById("brand_category");
    
    for (let i = 0; i < result.results.length; i++){
    let option = document.createElement("option");
    let brand_option = document.createElement("option");
    let currentCategory = result.results[i];
    if(profiledetails.categories.includes(currentCategory.id) && currentCategory.deleted==false)
    {
      if(currentCategory.brand==null && currentCategory.public==true)
      {
      unassociated_brand_categoryids.push(currentCategory.id);  
      brand_option.value = currentCategory.id;
      brand_option.text = currentCategory.name;
      select_brand.appendChild(brand_option);
      }
    categoryids.push(currentCategory.id);
    option.value = currentCategory.id;
    option.text = currentCategory.name;
    select.appendChild(option);
    }
}
if(categories.meta.next!=null )
{
    if (offset!=0)
    document.getElementById("ticketinfo").innerHTML="Getting "+ offset +" category of " + categories.meta.count + " Categories Completed";
offset = offset + 50;
}
else{
    flag = false;
    break;
}
}
}

// Get V2 Staff

async function getStaffs(subdomain, token) {
    
    removeOptions(document.getElementById("category"));
    document.getElementById("ticketinfo").innerHTML='getting staffs...';

    try {
        url = "https://"+subdomain+"."+domain+"/api/v2/staff/?active=true";
        let res = await fetch("https://"+subdomain+"."+domain+"/api/v2/staff/?active=true", {
  method: 'GET', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + token
  }
})

staffs = Object.assign({}, await res.json());
        
    } catch (error) {
        console.log(error);
    } 
    
result = Object.assign({}, staffs);
    for (let i = 0; i < result.results.length; i++){
    staffids[i] = result.results[i].id;
}
    return staffids;
}


async function getStatus(subdomain, token) {
    
    removeOptions(document.getElementById("status"));
    document.getElementById("ticketinfo").innerHTML='getting stauses...';
let flag=true;
let offset=0;
while(flag==true)
{
    try {
        let res = await fetch("https://"+subdomain+"."+domain+"/api/v2/statuses/?limit=50&offset="+offset+"&deleted=false", {
  method: 'GET', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + token
  }
})

statuses = Object.assign({}, await res.json());
        
    } catch (error) {
        console.log(error);
    }
    
result = Object.assign({}, statuses);
    let select = document.getElementById("status");
    for (let i = 0; i < result.results.length; i++){
    if(result.results[i].deleted==false){
    let option = document.createElement("option");
    option.value = result.results[i].id;
    option.text = result.results[i].name;
    select.appendChild(option);
    }
}
if(statuses.meta.next!=null )
{
    if (offset!=0)
    document.getElementById("ticketinfo").innerHTML="Getting "+ offset +" status of " + statuses.meta.count + " Statuses Completed";
offset = offset + 50;
}
else{
    flag = false;
    break;
}
}
}

async function getObjectId(drpname)
{

    let select = document.getElementById(drpname);
    return select.selectedIndex.id

}


// get profile

async function getStaffProfile(subdomain, token) {
    
    document.getElementById("ticketinfo").innerHTML='getting Profile details...';

    try {
        let res = await fetch("https://"+subdomain+"."+domain+"/api/v2/profile/", {
  method: 'GET', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + token
  }
})

profiledetails = Object.assign({}, await res.json());
        
    } catch (error) {
        console.log(error);
    }
    
    document.getElementById("usrname").innerHTML= profiledetails.first_name + " " + profiledetails.last_name;
    document.getElementById("categories_count").innerHTML= profiledetails.categories.length;
    
}

// search ticket

async function searchTicket(ticket_id) {
    
  if(token=="")
    {
        document.getElementById("ticket-search-error-message").innerHTML="Please login to continue";
        return false;
    }
   else if (ticket_id=="")
   {
    document.getElementById("ticket-search-error-message").innerHTML="Please enter search term...";
        return false;
   } 
    document.getElementById("ticket-search-error-message").innerHTML="";
    document.getElementById("ticketinfo").innerHTML='searching for ticket details...';

    try {
        let res = await fetch("https://"+subdomain+"."+domain+"/api/v2/autocomplete/global-search/?text="+ticket_id, {
  method: 'GET', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + token
  }
})

ticketdetails = Object.assign({}, await res.json());
        
    } catch (error) {
        console.log(error);
    }
    

if(ticketdetails.tickets.length!=0)
{
  
document.getElementById("searchtable").style.display = "block";
document.getElementById("noticketsfound").style.display = "none";
    
    document.getElementById("ticketid").innerHTML= '<b style=color:#DF6233>'+ticketdetails.tickets[0].display_id;
    document.getElementById("ticket_status").innerHTML= '<b style=color:#DF6233>'+ticketdetails.tickets[0].status.name;
    document.getElementById("ticket_priority").innerHTML= '<b style=color:#DF6233>'+ticketdetails.tickets[0].priority.name;
    document.getElementById("ticket_subject").innerHTML= '<b style=color:#DF6233>'+ticketdetails.tickets[0].subject;
    document.getElementById("ticket_category").innerHTML= '<b style=color:#DF6233>'+ticketdetails.tickets[0].category.name;
    document.getElementById("ticket_contact").innerHTML= '<b style=color:#DF6233>'+ticketdetails.tickets[0].contact.name;
    
      document.getElementById('ticketinfo').innerHTML = "Ticket Data for " + ticket_id + " fetched successfully";
}
else{
  
  document.getElementById("searchtable").style.display = "none";
  document.getElementById("noticketsfound").style.display = "block";
  document.getElementById("noticketsfound").innerHTML = "No Results Found...";

}
}

// get ticket count

async function getTicketsCount(subdomain, token) {
    

    let tickets=null;

    try {
        let res = await fetch("https://"+subdomain+"."+domain+"/api/v2/ticket-views/tickets-count/?id=2", {
  method: 'GET', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + token
  }
})

//await res.json();
tickets = Object.assign({}, await res.json());
        
    } catch (error) {
        console.log(error);
    }
    
    document.getElementById("tickets_count").innerHTML= tickets.results[0].tickets_count;
    
}

async function getFEBranch(subdomain, token) {
    
    document.getElementById("ticketinfo").innerHTML='getting Branch details...';

    try {
        let res = await fetch("https://"+subdomain+"."+domain+"/api/v2/front-end-branch/", {
  method: 'GET', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + token
  }
})

febranches = Object.assign({}, await res.json());
        
    } catch (error) {
        console.log(error);
    }
    
result = Object.assign({}, febranches);

    febranch = febranches.branch;
    document.getElementById("fe").innerHTML='<b style=color:white>FE branch : </b><b style=color:#DF6233>' + febranch +'</b>';
    
    
}

async function getBillingStatus(subdomain) {
    
    document.getElementById("ticketinfo").innerHTML='getting Billing details...';
    let bill_status = "";
    data = {"account_id":subdomain}
    try {
        let res = await fetch("https://billing.hfstaging.net/api/v1/billing-status/", {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'text/plain',
    'Authorization': 'Token ' + billing_token
  },
  body: JSON.stringify(data)
})

bill_status = Object.assign({}, await res.json());
        
    } catch (error) {
        console.log(error);
    }
    

billing_status = bill_status.subscription_status;
    document.getElementById("billstatus").innerHTML= billing_status;
    
    
}

async function getBEBranch(subdomain, token) {
    
    document.getElementById("ticketinfo").innerHTML='getting Branch details...';

    try {
        let res = await fetch("https://"+subdomain+"."+domain+"/api/v2/running-releases/", {
  method: 'GET', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + token
  }
})

beBranch = Object.assign({}, await res.json())  ;
        
    } catch (error) {
        console.log(error);
    }
    
result = Object.assign({}, beBranch);
    
    for(let [bebranch, value] of Object.entries(result)){
        
        for (let element of value){
            
            if(element == subdomain){
                document.getElementById("be").innerHTML='<b style=color:white>BE branch : </b><b style=color:#DF6233>' + bebranch +'</b>';
                break;
               }
            
        }
        
    }
    
}



async function getPriority(subdomain, token) {
    
    removeOptions(document.getElementById("priority"));
    document.getElementById("ticketinfo").innerHTML='getting priority...';
let offset =0;
let flag = true;
while (flag==true)
{
    try {
        let res = await fetch("https://"+subdomain+"."+domain+"/api/v2/priorities/?limit=50&offset="+offset+"&deleted=false", {
  method: 'GET', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + token
  }
})

priorities = Object.assign({}, await res.json());
        
    } catch (error) {
        console.log(error);
    }
    
result = Object.assign({}, priorities);
    let select = document.getElementById("priority");
    for (let i = 0; i < result.results.length; i++){
    if(result.results[i].deleted==false){
    let option = document.createElement("option");
    option.value = result.results[i].id;
    option.text = result.results[i].name;
    select.appendChild(option);
    }
}
if(priorities.meta.next!=null )
{
    if (offset!=0)
    document.getElementById("ticketinfo").innerHTML="Getting "+ offset +" priority of " + priorities.meta.count + " Priorities Completed";
offset = offset + 50;
}
else{
    flag = false;
    break;
}
}
}

//get News

async function getNews() {
    
let news = null;
let res = "";
    try {
        res = await fetch("https://newsdata.io/api/1/news?apikey=pub_162695ebdf223cae366205724b25bc152c1ed&q=technology&country=in,gb,us&language=en&category=technology/", {
  
        method: 'GET', // or 'PUT'
  headers: {
    'Access-Control-Allow-Origin': "*",
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + token,
  }
})

        
    } catch (error) {
        console.log(error);
    }
    
result = Object.assign({}, news);

    
if(res.status==200){
    for (let i = 0; i < result.articles.length; i++){
        const node = document.createElement("ticker-item");
        const textnode = document.createTextNode(results[i].title);
        node.appendChild(textnode);
        document.getElementById("ticker-transition").appendChild(node);
    if(i==11)
    break;
}
}
}

async function getAssetTypes(subdomain, token) {
    
    removeOptions(document.getElementById("assettypes"));
    let offset = 0;
    document.getElementById("ticketinfo").innerHTML='getting asset types...';
    let flag = true;
while (flag==true)
{
    try {
        let res = await fetch("https://"+subdomain+"."+domain+"/api/v2/asset-types/?limit=50&offset="+offset+"&deleted=false", {
  method: 'GET', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + token
  }
})

assetTypes = Object.assign({}, await res.json());
        
    } catch (error) {
        console.log(error);
    }
    
result = Object.assign({}, assetTypes);
    let select = document.getElementById("assettypes");
    for (let i = 0; i < result.results.length; i++){
    let option = document.createElement("option");
    option.value = result.results[i].id;
    option.text = result.results[i].name;
    select.appendChild(option);
    
}
if(assetTypes.meta.next!=null )
{
    if (offset!=0)
    document.getElementById("ticketinfo").innerHTML="Getting <font color='#DF6233'>"+ offset +"</font> asset types of  <font color='#DF6233'>" + assetTypes.meta.count + "</font> asset types Completed";
offset = offset + 50;
}
else{
    flag = false;
    break;
}
}

}


async function getRoles(subdomain, token) {
    
    removeOptions(document.getElementById("agentroles"));
    let offset = 0;
    document.getElementById("ticketinfo").innerHTML='getting agent roles...';
    let flag = true;
while (flag==true)
{
    try {
        let res = await fetch("https://"+subdomain+"."+domain+"/api/v2/roles/?limit=50&offset="+offset+"&deleted=false", {
  method: 'GET', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + token
  }
})

agentroles = Object.assign({}, await res.json());
        
    } catch (error) {
        console.log(error);
    }
    
result = Object.assign({}, agentroles);
    let select = document.getElementById("agentroles");
    for (let i = 0; i < result.results.length; i++){
    let option = document.createElement("option");
    option.value = result.results[i].id;
    option.text = result.results[i].name;
    select.appendChild(option);
    
}
if(agentroles.meta.next!=null )
{
    if (offset!=0)
    document.getElementById("ticketinfo").innerHTML="Getting <font color='#DF6233'>"+ offset +"</font> roles of  <font color='#DF6233'>" + agentroles.meta.count + "</font> Roles Completed";
offset = offset + 50;
}
else{
    flag = false;
    break;
}
}

}

async function getContacts(subdomain, token) {
    
    removeOptions(document.getElementById("contacts"));
    let offset = 0;
    document.getElementById("ticketinfo").innerHTML='getting contacts...';
    let flag = true;
while (flag==true)
{
    try {
        let res = await fetch("https://"+subdomain+"."+domain+"/api/v2/contacts/?limit=50&offset="+offset+"&deleted=false", {
  method: 'GET', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + token
  }
})

contacts = Object.assign({}, await res.json());
        
    } catch (error) {
        console.log(error);
    }
    
result = Object.assign({}, contacts);
    let select = document.getElementById("contacts");
    for (let i = 0; i < result.results.length; i++){
    let option = document.createElement("option");
    option.value = result.results[i].id;
    option.text = result.results[i].name + " - " + result.results[i].email;
    select.appendChild(option);
    
}
if(contacts.meta.next!=null )
{
    if (offset!=0)
    document.getElementById("ticketinfo").innerHTML="Getting <font color='#DF6233'>"+ offset +"</font> contacts of  <font color='#DF6233'>" + contacts.meta.count + "</font> contacts Completed";
offset = offset + 50;
}
else{
    flag = false;
    break;
}
}
document.getElementById("contacts_count").innerHTML= contacts.meta.count;
}



async function getCustomFields(type,subdomain, token) {
    
   let cflag = false;
   if (type=="ticket")
   tcsfieldsdata = {};
   else
   ccsfieldsdata = {};

  let flag=true;
  let offset = 0;
    
    document.getElementById("ticketinfo").innerHTML='getting custom fields...';
    while(flag==true)
{
    try {
        let res = await fetch("https://"+subdomain+"."+domain+"/api/v2/custom-fields/"+type+"/?limit=50&offset="+offset, {
  method: 'GET', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + token
  }
})

csfields = Object.assign({}, await res.json());
        
    } catch (error) {
        console.log(error);
    }
    
result = Object.assign({}, csfields);
    select = document.getElementById("csfields");
    for (let i = 0; i < result.results.length; i++){
    
    if(result.results[i].compulsory==true)
       {
               if(type=="ticket"){
                for(let j=0; j< result.results[i].categories.length; j++){
               if(result.results[i].categories[j]==sCategory){
                   if(result.results[i].type=="dropdown")
                   tcsfieldsdata[result.results[i].id] = 1
                   if(result.results[i].type=="number")
                   tcsfieldsdata[result.results[i].id] = 1
                   if(result.results[i].type=="text")
                   tcsfieldsdata[result.results[i].id] = "test date from qa"
                   if(result.results[i].type=="multiple_option")
                   tcsfieldsdata[result.results[i].id] = [1]
                   if(result.results[i].type=="date")
                   tcsfieldsdata[result.results[i].id] = formatDate();
                   document.getElementById("ticketinfo").innerHTML = "Got Custom Fields to handle... I will take care!";
                   cflag = true;
           }
    }
}
else{
    if(result.results[i].type=="dropdown")
    ccsfieldsdata[result.results[i].id] = 1
    if(result.results[i].type=="text")
    ccsfieldsdata[result.results[i].id] = "test date from qa"
     if(result.results[i].type=="number")
    ccsfieldsdata[result.results[i].id] = 1
    if(result.results[i].type=="multiple_option")
    ccsfieldsdata[result.results[i].id] = [1]
    if(result.results[i].type=="date")
    ccsfieldsdata[result.results[i].id] = formatDate();
    document.getElementById("ticketinfo").innerHTML = "Got Custom Fields to handle... I will take care!";
    cflag = true;

}
    
}
}
if(csfields.meta.next!=null )
{
    if (offset!=0)
    document.getElementById("ticketinfo").innerHTML="Getting "+ offset +" custom fields of " + csfields.meta.count + " Completed";
offset = offset + 50;
}
else{
    flag = false;
    break;
}
}
   if(cflag==false)
                   {
                       document.getElementById("ticketinfo").innerHTML = "No Mandatory Custom fields to handle phew!!";
                       
                   } 
    if(type=="ticket")
    return tcsfieldsdata;
    else
    return ccsfieldsdata;
}



function clearllselect()
{
    let option = "";
    let select = "";
    
    document.getElementById("category").innerHTML = "";
    select = document.getElementById("category");
    option = document.createElement("option");
    option.text = "Select a Category..";
    select.appendChild(option);
    document.getElementById("status").innerHTML = "";
    select = document.getElementById("status");
    option = document.createElement("option");
    option.text = "Select a Status..";
    select.appendChild(option);
    document.getElementById("priority").innerHTML = "";
    select = document.getElementById("priority");
    option = document.createElement("option");
    option.text = "Select a Priority..";
    select.appendChild(option);
    document.getElementById("contacts").innerHTML = "";
    select = document.getElementById("contacts");
    option = document.createElement("option");
    option.text = "Select a Contact..";
    select.appendChild(option);
}

// Required Check

function required(subdomain,user,pass)
{
document.getElementById("loader").style.display = "block";
document.getElementById("error-message").innerHTML = ""
var lsubdomain = document.forms["myForm"]["sub-domainer"].value;
var lemail = document.forms["myForm"]["username"].value;
var lpass = document.forms["myForm"]["lpass"].value;
var ldomain = document.getElementById("ldomain").value;
setDomain(ldomain);
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

if(ldomain=="Select a Domain..")
{
    document.getElementById("ticketinfo").innerHTML = "Please select a valid"+"<b style='color:#FACD4A; font-family: Marker Felt';> Domain..."
    document.getElementById("loader").style.display = "none";
    return false;
}
else if (lsubdomain == "")
{
    document.getElementById("ticketinfo").innerHTML = "Please input a valid"+"<b style='color:#FACD4A; font-family: Marker Felt';> Sub Domain"
    document.getElementById("loader").style.display = "none";
return false;
}
else if (lemail == ""){
    document.getElementById("ticketinfo").innerHTML = "Enter a valid "+"<b style='color:#FACD4A; font-family: Marker Felt';> email..."
  document.getElementById("loader").style.display = "none";
    return false;
}
else if (lemail == "")
{
    document.getElementById("ticketinfo").innerHTML = "Please input a " +"<b style='color:#FACD4A; font-family: Marker Felt';> email address"
document.getElementById("loader").style.display = "none";
return false;
}
else if (lpass == "")
{
    document.getElementById("ticketinfo").innerHTML = "Please input a valid"+"<b style='#FACD4A:red; font-family: Marker Felt';> password"
document.getElementById("loader").style.display = "none";
return false;
}
else{
document.getElementById("loader").style.display = "block";
autocomplete(document.getElementById("plan-features"), featureflags);
return worknow(document.getElementById('lsub-domain').value, document.getElementById('aemail').value, document.getElementById('apsw').value); 
}
}

// PASSWORD SHOWER

function showpass() {
    var x = document.getElementById("apsw");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

function openForm() {
    document.getElementById("error-message").innerHTML = ""
    document.getElementById("login").innerHTML = "Login"
    document.getElementById("login").disabled = false;
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

async function synchnow(subdomain)
{
  document.getElementById("loader").style.display = "block";
    await getStaffProfile(subdomain, token);
    await getCategory(subdomain, token);
    await getStatus(subdomain, token);
    await getPriority(subdomain, token);
    await getContacts(subdomain, token);
    await getAssetTypes(subdomain, token);
    document.getElementById("ticketinfo").innerHTML='Done with my work...'
    document.getElementById("loader").style.display = "none";
}

async function worknow(subdomain,user,pass) {
    getNewQuote();
    document.getElementById("login").innerHTML='logging in..';
    document.getElementById("login").disabled = true;
    clearllselect();
    let auth = await getToken(subdomain, user, pass);
    result = Object.assign({}, auth);
    document.getElementById("login").innerHTML='Login';
    document.getElementById("login").disabled = false;
    if(auth!=false && auth!=null){
    alert("Your account details fetched successfully!");
    token = result.auth_token;
    document.getElementById("authtoken").innerHTML = '<b style=color:#DF6233>'+token+'</b>';
    document.getElementById("loader").style.display = "block";
    getFEBranch(subdomain, token);
    getBEBranch(subdomain, token);
    await getV1Token();
    await fetchNotifications();
    await getKBSections();
    await getStaffProfile(subdomain,token);
    await getRoles(subdomain, token);
    await getTicketsCount(subdomain,token);
    await getCategory(subdomain, token);
    await getStatus(subdomain, token);
    await getPriority(subdomain, token);
    await getContacts(subdomain, token);
    await getAssetTypes(subdomain, token);
    await getCustomFields("contact",subdomain, token);
    document.getElementById("random_ticket_create").style.display="block";
    document.getElementById("ticketinfo").innerHTML='Ready for Creation...'
    document.getElementById("loader").style.display = "none";
    }
    }

    
    
function setcategoryid(category)
    {
        
        sCategory = category;
        document.getElementById("ticketinfo").innerHTML='Category is set...'+ document.getElementById('category').text;
        getCustomFields("ticket",document.getElementById("lsub-domain").value, token);
        getCustomFields("contact",document.getElementById("lsub-domain").value, token);
    }

function setbrandcategoryid(brandCategory)
    {
        
        sBrandCategory = brandCategory;
        document.getElementById("ticketinfo").innerHTML='Brand Category is set...'+ document.getElementById('brand_category').options[document.getElementById('brand_category').selectedIndex].text;;
    }

function setCustomId(csfield)
    {
        
        sCSfield = csfield;
        var e = document.getElementById("status");
        document.getElementById("ticketinfo").innerHTML='Custom Field is set...'+ e.options[e.selectedIndex].text;
        
    }

function setDomain(tdomain)
    {
        
        domain = tdomain;
        var e = document.getElementById("domain");
        document.getElementById("ticketinfo").innerHTML='Domain is set to...'+ tdomain;
        
    }

function setSubDomain(tsubdomain)
    {
        
        subdomain = tsubdomain;
        var e = document.getElementById("lsub-domain");
        document.getElementById("ticketinfo").innerHTML='Domain is set to...'+ tsubdomain;
        
    }
    
function setstatusid(status)
    {
        
        sStatus = status;
        var e = document.getElementById("status");
        document.getElementById("ticketinfo").innerHTML='Status is set : '+ e.options[e.selectedIndex].text;
        
    }
    
function setPriorityId(priority)
    {
        
        sPriority = priority;
        var e = document.getElementById("priority");
        document.getElementById("ticketinfo").innerHTML='Priority is set : '+ e.options[e.selectedIndex].text;
        
    }  
    
function setContactId(contact)
    {
        
        sContact = contact;
        var e = document.getElementById("contacts");
        document.getElementById("ticketinfo").innerHTML='Contact is set : '+ e.options[e.selectedIndex].text;
    }


function formatDate() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

async function changeFEBranch(subdomain, branch) {
    document.getElementById('ticketinfo').innerHTML = "Branch Change is inprogress...";
    
    let data = {
        "branch": branch
    }
    
     try {
        
        let res = await fetch("https://"+subdomain+"."+domain+"/api/v2/front-end-branch/", {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + token
  },
    body: JSON.stringify(data)
})
    if(res.status!=200)
    {
        alert("Branch Change Failure..." + res.status);
        document.getElementById('ticketinfo').innerHTML = "Branch Creation Failure..." + res.status + " - " + JSON.stringify(data);
        return;
    }
    else{
         alert("Branch Change Successful...")
         getFEBranch(subdomain, token);
    }
        
    } catch (error) {
        console.log(error);
        
}
}



async function changeBranch(subdomain, branch) {
    document.getElementById('ticketinfo').innerHTML = "Branch Change is inprogress...";
    
    let data = {
        "running_release": branch
    }
    
     try {
        
        let res = await fetch("https://"+subdomain+"."+domain+"/api/v2/running-releases/", {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + token
  },
    body: JSON.stringify(data)
})
    if(res.status!=200)
    {
        alert("Branch Change Failure..." + res.status);
        document.getElementById('ticketinfo').innerHTML = "Branch Creation Failure..." + res.status + " - " + JSON.stringify(data);
        return;
    }
    else{
         alert("Branch Change Successful...")
         getBEBranch(subdomain, token);
    }
        
    } catch (error) {
        console.log(error);
        
}
}

function date_in_yyyy_mm_dd(date)
{
    return date => date.toISOString().slice(0, 10);
}
    
async function ticketCreation() {
  if(token=="")
    {
        document.getElementById("ticket-create-error-message").innerHTML="Please login to continue";
        return false;
    }
    document.getElementById("loader").style.display = "block";
    document.getElementById('ticketinfo').innerHTML = "";
    document.getElementById("ticketinfo").innerHTML='All ready for Ticket Creation...';
    document.getElementById(random_ticket?"random_ticket_create":"submitter").innerHTML=random_ticket?'Doing it..':'Creating...';
    document.getElementById(random_ticket?"random_ticket_create":"submitter").disabled = true;
    document.getElementById('ticketinfo').innerHTML = "Tickets Creation is inprogress...";
    
    await getCustomFields("ticket",subdomain, token);

    for(var i = 1; i <= document.getElementById("ntickets").value; i++) {

    let rannum = Math.floor((Math.random() * 1000) + 1);
    let sub = subjects[Math.floor(Math.random() * subjects.length)] + " - "+ rannum;
    let body = bodies[Math.floor(Math.random() * bodies.length)];
    var today= new Date().toLocaleString('en-US', { timeZone: 'UTC' });
    
    let data = {
        "subject": sub + " - " + today,
        "html": body,
        "category": sCategory,
        "status": sStatus,
        "priority": sPriority,
        "cc": [],
        "bcc": [],
        "is_private": document.getElementById('tickettype').checked,
        "contact_id": sContact,
        "due_date": new Date().toISOString().split('T')[0],
        "custom_fields":tcsfieldsdata,
        "contact_custom_fields":ccsfieldsdata
    }
    
    

    try {
        
        let res = await fetch("https://"+subdomain+"."+domain+"/api/v2/tickets/", {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + token
  },
    body: JSON.stringify(data)
})

let newticket = Object.assign({}, await res.json());

tickets.push(newticket);
        
if(res.status!=201)
    {
        alert("Ticket Creation Failure..." + res.status + " - " + JSON.stringify(tickets[0]))  ;
        if(random_ticket)
        document.getElementById('ticketinfo').innerHTML = "Ticket Creation Failure..." + res.status + " - " + JSON.stringify(tickets[0]);
        document.getElementById(random_ticket?"random_ticket_create":"submitter").disabled = false;
        document.getElementById(random_ticket?"random_ticket_create":"submitter").innerHTML='Submit';
        document.getElementById("loader").style.display = "none";
        return;
    }
    if(res.status==201)
    {
        document.getElementById('ticketinfo').innerHTML = "Tickets  <font color='#DF6233'>" + i + "</font> of  <font color='#DF6233'>" + document.getElementById("ntickets").value + "</font> Completed";
    } 
        
    } catch (error) {
        console.log(error);
        document.getElementById("loader").style.display = "none";
    }
}
    alltickets = [];
    alltickets.length = 0;
    
    for (let i = 0; i < tickets.length; i++){
    alltickets = alltickets + tickets[i].display_id + " " ;
    
}

    document.getElementById('ticketinfo').innerHTML = "";
    document.getElementById('ticketinfo').innerHTML = " Tickets created are "+ "<font color='#DF6233'>" + alltickets + "</font> 🚀 "
    document.getElementById(random_ticket?"random_ticket_create":"submitter").disabled = false;
    document.getElementById("loader").style.display = "none";
    alert("Ticket Creation successfully Completed!!");
    document.getElementById(random_ticket?"random_ticket_create":"submitter").innerHTML=random_ticket?'RANDOM TICKET':'Submit';
    random_ticket = false;
    alltickets.length = 0;
    alltickets = [];
    tickets = [];
    await getTicketsCount(subdomain,token);
    
}

async function linker(display_id)
{
        const ticket_id = parseInt(display_id.replace(/[^0-9]/g,""),10);
        console.log(ticket_id);
        let ticketlink = "https://"+document.getElementById('lsub-domain').value+"."+document.getElementById('ldomain').value+"/staff/ticket/"+ticket_id
        return "<b><a style='color:green;' href="+"'"+ticketlink+"'"+" "+"target='_blank'"+">"+display_id+"</a></b>"
}

// Generic Creation

async function genericCreation(otype, name) {
    document.getElementById("loader").style.display = "block";
    
    if(otype=="Select..")
    {
        document.getElementById("create-error-message").innerHTML="Please select a type...";
        return false;
    }
    else if(token=="")
    {
        document.getElementById("create-error-message").innerHTML="Please login to continue";
        return false;
    }
    let newobj, res = ""
    document.getElementById('ticketinfo').innerHTML = "";
    document.getElementById("ticketinfo").innerHTML='Preparing to create a '+ otype;
    document.getElementById("ticketinfo").innerHTML='creating a '+otype+'...';
    
    if(otype!="Account"){
    document.getElementById("createtype").disabled = true;
    document.getElementById('createtype').innerHTML = "Creating...";
    document.getElementById('ticketinfo').innerHTML = otype + " Creation is inprogress...";
    }

    if (otype=="categories")
    await getStaffs(subdomain, token);

    if (otype=="contacts")
    await getCustomFields("contact",subdomain, token);
    
    let nitems = document.getElementById("nitems").value;
    if(otype=="assets")
    {
      nitems = document.getElementById("aitems").value;
    }

    if(otype=="articles")
    {
      nitems = document.getElementById("kitems").value;
    }

    for(var i = 1; i <= nitems; i++) {

    let rannum = Math.floor((Math.random() * 1000) + 1);
    let rannum1 = Math.floor((Math.random() * 1000) + 1);
    let oname = "Automated " + otype+ " " + rannum + rannum1;
    let data,type;
    if (otype=="statuses")
    {
    let randomStatus = statusOptions[Math.floor(Math.random() * statusOptions.length)];
    let randomNumber = Math.floor(Math.random() * 100);
    data = {"name": (name!="") ? name : randomStatus + " " +randomNumber ,"color":'#' + Array.from({length: 6}, () => '0123456789ABCDEF'[Math.floor(Math.random() * 16)]).join(''),"behavior":"pending","description":"Automated Description"}
    }
    else if (otype=="assets"){
    let randomasset = systemAssets[Math.floor(Math.random() * systemAssets.length)];
    let randomNumber = Math.floor(Math.random() * 100);
    let disp = document.getElementById('assetdisp').value;
    data = {"name": (name!="") ? name : randomasset + " " +randomNumber,"display_id":(disp!="") ? disp : [...Array(3)].map(() => 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[]|:;"<>,.?/~`'[Math.floor(Math.random() * 72)]).join('')};
    }
    else if (otype=="priorities"){
      let randompriority = possiblePriorities[Math.floor(Math.random() * possiblePriorities.length)];
    let randomNumber = Math.floor(Math.random() * 100);
    
    data = {"name": (name!="") ? name : randompriority + " " +randomNumber,"description":"Automated"+ otype +" description",help_text:""};
    }
    else if (otype=="contacts")
    {
  let randomName = contactnames[Math.floor(Math.random() * contactnames.length)];
  let randomDomain = domains[Math.floor(Math.random() * domains.length)];
  let randomNumber = Math.floor(Math.random() * 100);
  let randomEmail = `${randomName.toLowerCase().replace(/\s/g, '')}${randomNumber}@${randomDomain}`;
  
    data = {"name": (name!="") ? name : randomName,"email":randomEmail, "custom_fields":ccsfieldsdata};
    }
    else if (otype=="contact-groups")
    data = {"name": (name!="") ? name : oname,"description":"Automated"+ otype +" description"};
    else if (otype=="categories"){
    data = {"name": (name!="") ? name : oname,"prefix":"CE","public":true,"description":"Automated"+ otype +" description","staff":staffids};
    }
    else if(otype=="Account")
    data = {"instance_name":name,"admin_email_id":document.getElementById("adminemail").value}
    else if(otype=="articles")
    {
      let kb_title = document.getElementById("kb_title").value;
      let is_external = document.getElementById('kb_is_external').checked
      let kb_desc = document.getElementById("kb_desc").value;
      let ran_kb = await generateRandomTitle();
      let ran_kb_desc = await generateArticleBody();

      
    data = {"title":kb_title!=""?kb_title:ran_kb,"slug":kb_title!=""?kb_title.replace(/[^\w\s]+/g, '').replace(/\s+/g, '-'):ran_kb.replace(/[^\w\s]+/g, '').replace(/\s+/g, '-'),"contents":kb_desc!=""?kb_desc:ran_kb_desc,"tags":[],"seo_title":"","meta_description":"","meta_keywords":"","sharing_image":"","twitter_card_type":null,"visibility":is_external?"external":"internal","allow_unsafe_content":false,"state":"published","is_internal":is_external?false:true,"section":sArticleSection}
    }
    else if(otype=="brands")
    data = {"name":name,"categories":[sBrandCategory],"domains":[{"domain":document.getElementById("brand-domain").value,"ssl_enabled":true}]}
    else
    data=""
                
    try {
        if(otype=="Account")
        url = "https://"+subdomain+"."+domain+"/api/v2/dev/set-create-request/";
        else if(otype=="articles")
        url = "https://"+subdomain+"."+domain+"/api/v2/kb/"+otype+"/";
        else if(otype=="assets")
        url = "https://"+subdomain+"."+domain+"/api/v2/"+otype+"/?asset_type="+document.getElementById('assettypes').value;
        else
        url = "https://"+subdomain+"."+domain+"/api/v2/"+otype+"/"
        res = await fetch(url, {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + token
  },
    body: JSON.stringify(data)
})

data = ""

newobj = Object.assign({}, await res.json());

objects.push(newobj);
        
if(res.status!=201)
    {
        alert(otype + " creation failure..." + res.status)  ;
        document.getElementById('ticketinfo').innerHTML = otype + " creation failure..." + res.status + " : " + JSON.stringify(newobj);
        document.getElementById("createtype").disabled = false;
        document.getElementById("createtype").innerHTML='Create';
        document.getElementById("loader").style.display = "none";
        return false;
    }

    if(res.status==201 && otype!="Account")
    {
        document.getElementById('ticketinfo').innerHTML = otype + "  <font color='#DF6233'>" + i + "</font> of  <font color='#DF6233'>" + nitems + "</font> Completed";
    }

    if("detail" in newobj)
        {
            document.getElementById("ticketinfo").style.color = "red";
            alert(otype + " creation failure..." + res.status + " : " + newobj.detail);
            document.getElementById('ticketinfo').innerHTML = otype + " creation failure..." + "You dont have required permission";
            document.getElementById("createtype").disabled = false;
            document.getElementById("createtype").innerHTML='Create';
            document.getElementById("ticketinfo").style.color = '';
            document.getElementById("loader").style.display = "none";
            return false;
        }
        
    } catch (error) {
        if(!error.message.includes("Body has already"))
        {
        console.log(error);
        alert(otype + " creation failure..."+ error);
        document.getElementById("ticketinfo").style.color = "red";
        document.getElementById('ticketinfo').innerHTML = otype + " creation failure..." + error;
        document.getElementById("createtype").disabled = false;
        document.getElementById("createtype").innerHTML='Create';
        document.getElementById("ticketinfo").style.color = '';
        document.getElementById("loader").style.display = "none";
        return false;
        }
        else
        {
            console.log(error);
            document.getElementById("loader").style.display = "none";
        }
    }
    // Break the loop in one iteration incase of account creation.
    if(otype=="Account")
    break;
} //for end
    let createobjs = "";
    
    for (let i = 0; i < objects.length; i++){
      let currretObject = ""
      if(otype=="articles")
      currretObject =  objects[i].title;
      else
      currretObject =  objects[i].name;
        createobjs = createobjs + currretObject + " , " ;
    }

    if(otype=="Account"){
    document.getElementById('ticketinfo').innerHTML = "";
    document.getElementById('ticketinfo').innerHTML = otype + " "+newobj.Success+" Created Successfully";
    document.getElementById("createtype").disabled = false;
    document.getElementById("loader").style.display = "none";
    alert("Please run the Mr Fox Command:--> " + "create helpdesk trial account "+name);
    }
    else{
    document.getElementById('ticketinfo').innerHTML = "";
    alert(otype + " " +createobjs+" creation successfully Completed!!");
    document.getElementById('ticketinfo').innerHTML = otype + " created are "+ "<font color='#DF6233'>" + createobjs + "</font> 🚀 "
    document.getElementById("createtype").disabled = false;
    document.getElementById("loader").style.display = "none";
    
    document.getElementById("createtype").innerHTML='Create';
    }
    objects=[];
    if(otype!="articles")
    synchnow(subdomain);
}


// Custom Field Creation

async function createCustomField(ctype, cqueue, name) {
    document.getElementById("loader").style.display = "block";
    
    if(ctype=="Select..")
    {
        document.getElementById("custom_create-error-message").innerHTML="Please select a Custom Field type...";
        return false;
    }
    else if(token=="")
    {
        document.getElementById("custom_create-error-message").innerHTML="Please login to continue";
        return false;
    }
    let newobj, res = ""
    document.getElementById('ticketinfo').innerHTML = "";
    document.getElementById("ticketinfo").innerHTML='Preparing to create a '+ ctype + ' Custom Field';
    document.getElementById("ticketinfo").innerHTML='creating a '+ctype+' custom field';
    
    for(var i = 1; i <= document.getElementById("citems").value; i++) {

    let rannum = Math.floor((Math.random() * 1000) + 1);
    let cname = "Automated " + ctype+ " " + rannum;
    let cdata = '';
    let cinternal = document.getElementById('custom_internal').checked;
    let ccompulsary = document.getElementById('custom_mandate').checked;
    let ccompulsary_complete = document.getElementById('custom_closure').checked;
    let ccompulsary_change = document.getElementById('custom_move').checked;
   
    if (ctype=='dropdown' || ctype=='multiple_option')
    cdata = {"name": (name!="") ? name : cname,"description":"Automated"+ ctype +" description","type":ctype,"internal":cinternal,"compulsory":ccompulsary,"compulsory_on_complete":ccompulsary_complete,"compulsory_on_move":ccompulsary_change,"categories":categoryids, "options":[{"id":null,"value":"1","is_default":false,"order":0},{"id":null,"value":"2","is_default":false,"order":1},{"id":null,"value":"3","is_default":false,"order":2},{"id":null,"value":"4","is_default":false,"order":3},{"id":null,"value":"5","is_default":false,"order":4}]}
    else
    cdata = {"name": (name!="") ? name : cname,"description":"Automated"+ ctype +" description","type":ctype,"internal":cinternal,"compulsory":ccompulsary,"compulsory_on_complete":ccompulsary_complete,"compulsory_on_move":ccompulsary_change,"categories":categoryids}
    
    categoryids =[];
                
    try {
        url = "https://"+subdomain+"."+domain+"/api/v2/custom-fields/"+cqueue+"/"
        res = await fetch(url, {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + token
  },
    body: JSON.stringify(cdata)
})

cdata = ""

newobj = Object.assign({}, await res.json());

objects.push(newobj);
if(res.status!=201)
    {
        alert(otype + " creation failure..." + res.status)  ;
        document.getElementById('ticketinfo').innerHTML = "Custom Feild " + ctype + " creation failure..." + res.status + " : " + JSON.stringify(newobj);
        document.getElementById("custom_create").disabled = false;
        document.getElementById("custom_create").innerHTML='Create';
        document.getElementById("loader").style.display = "none";
        return false;
    }

    if("detail" in newobj)
        {
            document.getElementById("ticketinfo").style.color = "red";
            alert(otype + " creation failure..." + res.status + " : " + newobj.detail);
            document.getElementById('ticketinfo').innerHTML = otype + " creation failure..." + "You dont have required permission";
            document.getElementById("custom_create").disabled = false;
            document.getElementById("custom_create").innerHTML='Create';
            document.getElementById("ticketinfo").style.color = '';
            document.getElementById("loader").style.display = "none";
            return false;
        }
        
    } catch (error) {
        if(!error.message.includes("Body has already"))
        {
        console.log(error);
        alert(otype + " creation failure..."+ error);
        document.getElementById("ticketinfo").style.color = "red";
        document.getElementById('ticketinfo').innerHTML = otype + " creation failure..." + error;
        document.getElementById("custom_create").disabled = false;
        document.getElementById("custom_create").innerHTML='Create';
        document.getElementById("ticketinfo").style.color = '';
        document.getElementById("loader").style.display = "none";
        return false;
        }
        else
        {
            console.log(error);
            document.getElementById("loader").style.display = "none";
        }
    }
} //for end
    let createobjs = "";
    
    for (let i = 0; i < objects.length; i++){
        createobjs = createobjs + objects[i].name + " , " ;
    }
  
    document.getElementById('ticketinfo').innerHTML = "";
    document.getElementById('ticketinfo').innerHTML = "Custom Feild of " + ctype + " "+newobj.Success+" type Created Successfully";
    document.getElementById("custom_create").disabled = false;
    document.getElementById("loader").style.display = "none";
    document.getElementById('ticketinfo').innerHTML = "";
    
    alert("Custom Feild of type " + ctype + " " + createobjs +" creation successfully Completed!!");
    document.getElementById("createtype").innerHTML='Create';
    objects=[];
    synchnow(subdomain);
  }

 // Asset Type Creation

async function createAssetType(name) {
    
    
    if(token=="")
    {
        document.getElementById("asset_type_create-error-message").innerHTML="Please login to continue";
        return false;
    }
    document.getElementById("loader").style.display = "block";
    document.getElementById("asset_type_create").innerHTML='Creating Asset...';

    let newobj, res = ""
    document.getElementById('ticketinfo').innerHTML = "";
    document.getElementById("ticketinfo").innerHTML='Preparing to create a Asset Type';
    document.getElementById("ticketinfo").innerHTML='creating a Asset Type';
    
    for(var i = 1; i <= document.getElementById("atitems").value; i++) {

    let rannum = Math.floor((Math.random() * 1000) + 1);
    let atname = "Automated Asset Type" + rannum;
    let atdata = '';
    let cassociation = document.getElementById('enable_contact_association').checked;
    let tassociation = document.getElementById('enable_ticket_association').checked;
    let aqontickets = document.getElementById('enable_asset_quantity_for_ticket').checked;
   
    atdata = {"name": (name!="") ? name : atname,"description":"Automated Asset description","enable_contact_association":cassociation,"enable_ticket_association":tassociation,"enable_asset_quantity_for_ticket":aqontickets}
    
    try {
        url = "https://"+subdomain+"."+domain+"/api/v2/asset-types/"
        res = await fetch(url, {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + token
  },
    body: JSON.stringify(atdata)
})

atdata = ""

newobj = Object.assign({}, await res.json());

objects.push(newobj);
        
if(res.status!=201)
    {
        alert(otype + "Assset type creation failure..." + res.status)  ;
        document.getElementById('ticketinfo').innerHTML = "Asset Type creation failure..." + res.status + " : " + JSON.stringify(newobj);
        document.getElementById("asset_type_create").innerHTML='Create';
        document.getElementById("loader").style.display = "none";
        return false;
    }
        
    } catch (error) {
            console.log(error);
            document.getElementById("loader").style.display = "none";
    }
} //for end
    let createobjs = "";
    
    for (let i = 0; i < objects.length; i++){
        createobjs = createobjs + objects[i].name + " , " ;
    }
    await getAssetTypes(subdomain, token);
    document.getElementById('ticketinfo').innerHTML = "";
    document.getElementById('ticketinfo').innerHTML = "Asset Type Created Successfully";
    document.getElementById("loader").style.display = "none";
    document.getElementById('ticketinfo').innerHTML = "";
    
    alert("Asset type " + createobjs +" creation successfully Completed!!");
    document.getElementById("asset_type_create").innerHTML='Create';
    objects=[];
    
  }


  // Agent Creation

async function createAgent(name) {
    
    
    if(token=="")
    {
        document.getElementById("agent_create-error-message").innerHTML="Please login to continue";
        return false;
    }
    document.getElementById("loader").style.display = "block";
    document.getElementById("agent_create").innerHTML='Creating Agent...';

    let newobj, res = ""
    document.getElementById('ticketinfo').innerHTML = "";
    document.getElementById("ticketinfo").innerHTML='Preparing to create a Agent';
    document.getElementById("ticketinfo").innerHTML='creating a Agent';
    

    let rannum = Math.floor((Math.random() * 1000) + 1);
    let agname = contactnames[Math.floor(Math.random() * contactnames.length)]+rannum;
    let agdata = '';
   
    agdata = {"first_name": (name!="") ? name : agname,"username":document.getElementById('agentusername').value,"password":document.getElementById('agentpassword').value,"email":document.getElementById('agentemail').value, "role":document.getElementById('agentroles').value}
    
    try {
        url = "https://"+subdomain+"."+domain+"/api/v2/staff-creation-without-invite/"
        res = await fetch(url, {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + token
  },
    body: JSON.stringify(agdata)
})

agdata = ""

newobj = Object.assign({}, await res.json());

objects.push(newobj);
        
if(res.status!=201)
    {
        alert(otype + "Agent creation failure..." + res.status)  ;
        document.getElementById('ticketinfo').innerHTML = "Agent creation failure..." + res.status + " : " + JSON.stringify(newobj);
        document.getElementById("agent_create").innerHTML='Create';
        document.getElementById("loader").style.display = "none";
        return false;
    }
        
    } catch (error) {
            console.log(error);
            document.getElementById("loader").style.display = "none";
    }
//for end
    let createobjs = "";
    
    for (let i = 0; i < objects.length; i++){
        createobjs = createobjs + objects[i].name + " , " ;
    }
    document.getElementById('ticketinfo').innerHTML = "";
    document.getElementById('ticketinfo').innerHTML = "Asset Type Created Successfully";
    document.getElementById("loader").style.display = "none";
    document.getElementById('ticketinfo').innerHTML = "";
    
    alert("Agent creation successfully Completed!!");
    document.getElementById("agent_create").innerHTML='Create';
    objects=[];
    
  }


// Generic PACTH

async function featureFlagUpdate(type) {
    document.getElementById("loader").style.display = "block";
    
    if(token=="")
    {
        document.getElementById("error-message").innerHTML="Please login to continue";
        document.getElementById("loader").style.display = "none";
        return false;
    }
    let data, newobj, res = ""
    document.getElementById('ticketinfo').innerHTML = "";
    document.getElementById("ticketinfo").innerHTML='Preparing to update feature flag';
    let flag_name = "";
    if(type=='generic')
    {
    flag_name = document.getElementById('plan-features').value;
    data = {"features": { [flag_name] : document.getElementById('flagstatus').checked}}
    }
    else
    {
    flag_name = type
    data = {"features": { [type] : document.getElementById(type).checked}}
    }
                
    try {
        url = "https://"+subdomain+"."+domain+"/api/v2/plan-features/"
        res = await fetch(url, {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + token
  },
    body: JSON.stringify(data)
})

data = ""

newobj = Object.assign({}, await res.json());
        
if(res.status!=200)
    {
        alert(flag_name + " updation failure..." + res.status)  ;
        document.getElementById('ticketinfo').innerHTML = " Feature flag "+flag_name+" updation failure..." + res.status;
        document.getElementById("updateflag").disabled = false;
        document.getElementById("updateflag").innerHTML='Update';
        document.getElementById("loader").style.display = "none";
    }

    if("detail" in newobj)
        {
            document.getElementById("ticketinfo").style.color = "red";
            alert(toupdate + " creation failure..." + res.status + " : " + newobj.detail);
            document.getElementById('ticketinfo').innerHTML =  " Feature flag "+flag_name+"  Updation failed - You dont have required permission";
            document.getElementById("updateflag").disabled = false;
            document.getElementById("updateflag").innerHTML='Update';
            document.getElementById("ticketinfo").style.color = '';
            document.getElementById("loader").style.display = "none";
            return false;
        }
        
    } catch (error) {
        if(!error.message.includes("Body has already"))
        {
        console.log(error);
        alert(falg + " Updation failure..."+ error);
        document.getElementById("ticketinfo").style.color = "red";
        document.getElementById('ticketinfo').innerHTML = "Feature flag updation failure.." + error;
        document.getElementById("updateflag").disabled = false;
        document.getElementById("updateflag").innerHTML='Update';
        document.getElementById("ticketinfo").style.color = '';
        document.getElementById("loader").style.display = "none";
        return false;
        }
        else
        {
            console.log(error);
            document.getElementById("loader").style.display = "none";
        }
    }
    document.getElementById('ticketinfo').innerHTML = "";
    document.getElementById("updateflag").disabled = false;
    document.getElementById("loader").style.display = "none";
    if(type=='generic')
    {
    alert("Plan Feature " +flag_name +" set to "+document.getElementById('flagstatus').checked +" successfully!!");
    document.getElementById('ticketinfo').innerHTML = "Plan Feature <b>" +flag_name +"</b> set to <b>"+document.getElementById('flagstatus').checked.toString().toUpperCase() +"</b> successfully!!";
    }
    else
    {
    alert("Plan Feature " +flag_name +" set to "+document.getElementById(type).checked +" successfully!!");
    document.getElementById('ticketinfo').innerHTML = "Plan Feature <b>" +flag_name +"</b> set to <b>"+document.getElementById(type).checked.toString().toUpperCase() +"</b> successfully!!";
    }
    objects=[];
    if(type=='generic')
    {
    await setFeatures();
    }
}

// Set Feature Flag

async function setFeatures() {
    
    if(token=="")
    {
        document.getElementById("create-error-message").innerHTML="Please login to continue";
        return false;
    }
    let data, newobj, res = ""
    document.getElementById('ticketinfo').innerHTML = "";
    document.getElementById("ticketinfo").innerHTML='Preparing to update feature flag';

    data = {"features": { }}
                
    try {
        url = "https://"+subdomain+"."+domain+"/api/v2/plan-features/"
        res = await fetch(url, {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + token
  },
    body: JSON.stringify(data)
})

data = ""

result = Object.assign({}, await res.json());

result.service_desk_ui == true ? document.getElementById('service_desk_ui').checked=true : document.getElementById('service_desk_ui').checked=false
result.service_desk == true ? document.getElementById('service_desk').checked=true : document.getElementById('service_desk').checked=false
result.teams == true ? document.getElementById('teams').checked=true : document.getElementById('teams').checked=false
result.service_catalog == true ? document.getElementById('service_catalog').checked=true : document.getElementById('service_catalog').checked=false
result.anyother == true ? document.getElementById('anyother').checked=true : document.getElementById('anyother').checked=false


}
catch (error) {
}
}

function closeAuditNav() {
  document.getElementById("myAuditNav").style.width = "0%";
}

function closeTicketNav() {
  document.getElementById("myTicketNav").style.width = "0%";
}

function closeSentEmailLog(){
  document.getElementById("mySentEmailNav").style.width = "0%";
}

function closePendingTasksLog(){
  document.getElementById("myPendingTasksNav").style.width = "0%";
}

function closeTicketDetailsNav() {
  document.getElementById("myTicketDetailsNav").style.width = "0%";
}



async function getAuditLog() {
const apiUrl = "https://"+subdomain+"."+domain+"/api/v2/audit-logs/?limit=50";
  const offset = (currentPage - 1) * perPage;
  const response = await fetch(`${apiUrl}&offset=${offset}`, {
    headers: {
      'Authorization': `Token ${token}`
    }
  });
  const data = await response.json();
  return data;
}

function renderauditdata(data) {
  document.getElementById("myAuditNav").style.width = "100%";
  const tableBody = document.getElementById('auditdata').getElementsByTagName('tbody')[0];
      tableBody.innerHTML = '';

      

  for (let i = 0; i < data.results.length; i++) {
    document.getElementById("auditlogtable").style.display="block";
    const item = data.results[i];
        const row = tableBody.insertRow(i);
        const actionCell = row.insertCell(0);
        const acttypeCell = row.insertCell(1);
        const actCell = row.insertCell(2);
        const ipCell = row.insertCell(3);
        const resCell = row.insertCell(4);
        const timeCell = row.insertCell(5);
        actionCell.innerText = item.action;
        acttypeCell.innerText = item.action_type;
        actCell.innerText = item.actor;
        ipCell.innerText = item.ip_address;
        resCell.innerText = item.resource_type;
        timeCell.innerText = item.timestamp;
        
  }

  renderAuditPagination(data.meta.count);
}

function renderAuditPagination(totalItems) {
  const totalPages = Math.ceil(totalItems / 50);

  document.getElementById('auditpagination').innerHTML = '';

  if (currentPage > 1) {
    const prevButton = document.createElement('a');
    prevButton.innerText = 'Prev';
    prevButton.addEventListener('click', () => {
      currentPage--;
      getAuditLog().then(renderauditdata);
    });
    document.getElementById('auditpagination').appendChild(prevButton);
  }

 // Display up to 3 page buttons at a time, centered on the current page
 const startPage = Math.max(1, currentPage - 1);
  const endPage = Math.min(totalPages, startPage + 8);
  if (startPage > 1) {
    const firstButton = document.createElement('a');
    firstButton.innerText = '1';
    firstButton.addEventListener('click', () => {
      currentPage = 1;
      offset = 0;
      getAuditLog().then(renderauditdata);
    });
    document.getElementById('auditpagination').appendChild(firstButton);
    if (startPage > 2) {
      const ellipsis = document.createElement('span');
      ellipsis.innerText = '...';
      ellipsis.className = 'ellipsis';
      document.getElementById('auditpagination').appendChild(ellipsis);
    }
  }
  for (let i = startPage; i <= endPage; i++) {
    const pageButton = document.createElement('a');
    pageButton.innerText = i;
    if (i === currentPage) {
      pageButton.classList.add('active');
    } else {
      pageButton.addEventListener('click', () => {
        currentPage = i;
        offset = (i - 1) * limit;
        getAuditLog().then(renderauditdata);
      });
    }
    document.getElementById('auditpagination').appendChild(pageButton);
  }
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      const ellipsis = document.createElement('a');
      ellipsis.innerText = '...';
      ellipsis.className = 'ellipsis';
      document.getElementById('auditpagination').appendChild(ellipsis);
    }
    const lastButton = document.createElement('a');
    lastButton.innerText = totalPages;
    lastButton.addEventListener('click', () => {
      currentPage = totalPages;
      offset = (totalPages - 1) * limit;
      getAuditLog().then(renderauditdata);
    });
    document.getElementById('auditpagination').appendChild(lastButton);
  }
  // Only display the next button if we're not on the last page
  if (currentPage < totalPages) {
    const nextButton = document.createElement('a');
    nextButton.innerText = 'Next';
    nextButton.addEventListener('click', () => {
      currentPage += 1;
      offset = currentPage * limit;
      getAuditLog().then(renderauditdata);
    });
    document.getElementById('auditpagination').appendChild(nextButton);
  }
}



async function getSentEmailLogsData() {
const apiUrl = "https://"+subdomain+"."+domain+"/api/v2/sent-email-logs/?limit=50";
  const offset = (currentPage - 1) * perPage;
  const response = await fetch(`${apiUrl}&offset=${offset}`, {
    headers: {
      'Authorization': `Token ${token}`
    }
  });
  data = "";
  data = await response.json();
  return data;
}

async function getPendingTasks(){
const apiUrl = "https://"+subdomain+"."+domain+"/api/v2/list-pending-tasks/";
  const response = await fetch(`${apiUrl}`, {
    headers: {
      'Authorization': `Token ${token}`
    }
  });
  data = "";
  data = await response.json();
  return data;
}

function renderPendingTasksdata() {
  document.getElementById("myPendingTasksNav").style.width = "100%";
  const tableBody = document.getElementById('pendingTasksData').getElementsByTagName('tbody')[0];
      tableBody.innerHTML = '';

      
// TODO NOW
  for (let i = 0; i < data.length; i++) {
    
    document.getElementById("pendingtaskstable").style.display="block";
    document.getElementById("table-container-right").style.display="block";
    const datatable = document.getElementById("pendingtaskstable");
    const item = data[i];
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.id}</td>
      <td>${item.eta}</td>
      <td>${item.http_post_path}</td>
      <td>${item.http_post_body}</td>
      <td>${item.failure_count}</td>
      <td>${item.task_id}</td>
      <td>${item.status}</td>
      <td>${item.execute_immediately}</td>
      <td>${item.error_info}</td>
    `;
    tableBody.appendChild(row);
        
  }
}

async function getTicketData() {
const apiUrl = "https://"+subdomain+"."+domain+"/api/v2/tickets/?limit=50";
  const offset = (currentPage - 1) * perPage;
  const response = await fetch(`${apiUrl}&offset=${offset}`, {
    headers: {
      'Authorization': `Token ${token}`
    }
  });
  data = "";
  data = await response.json();
  return data;
}

async function getTicketDetails(ticketid) {
const apiUrl = "https://"+subdomain+"."+domain+"/api/v2/tickets/"+ticketid+"/";
  const response = await fetch(`${apiUrl}`, {
    headers: {
      'Authorization': `Token ${token}`
    }
  });
  ticketdata = "";
  ticketdata = await response.json();
  return ticketdata;
}

async function ticketUpdate(ticketid, type) {
  const msg = prompt("Enter your message:");
  if (msg !== null && msg !== "") {
    const payload = {
      html: msg,
      message_type: type == "reply" ? "reply" : "private_note"
    };
    await fetch("https://"+subdomain+"."+domain+"/api/v2/tickets/"+ticketid+"/", {
        
      method: "PATCH",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Token ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        alert("Your message has been added as a "+type);
        getTicketDetails(ticketid).then(renderTicketDetailsData)
      })
      .catch(error => {
        console.error("Error:", error);
        alert("An error occurred while adding your message as a reply.");
      });
  }
}


async function addTimeSpent(ticketid) {
  const msg = prompt("Enter your time spent:");
  if (msg !== null && msg !== "") {
    const payload = {
      time_spent:msg
    };
    await fetch("https://"+subdomain+"."+domain+"/api/v2/tickets/"+ticketid+"/", {
        
      method: "PATCH",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Token ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        alert("Your Time Spent added to ticket : "+msg);
        getTicketDetails(ticketid).then(renderTicketDetailsData)
      })
      .catch(error => {
        console.error("Error:", error);
        alert("An error occurred while adding time spent.");
      });
  }
}

/* Execute Pending Tasks */

async function executePendingTasks(type, task) {

let task_id = "";

        if (type == 'regular')
        {
        task_id = task;
        document.getElementById("execute_task").innerHTML="Executing...";
        }
        if (type == 'contact')
        {
          task_id = document.evaluate("//td[contains(text(),'api/v2/private/contact/activities/execute/')]/../td[1]", document, null, XPathResult.STRING_TYPE, null).stringValue;
        }
        if (type === 'audit-login')
        {
          task_id = document.evaluate("//td[contains(text(),'api/v2/private/audit-log-report/login-history/execute/')]/../td[1]", document, null, XPathResult.STRING_TYPE, null).stringValue;
        }
        if (type == 'audit-regular')
        {
          task_id = document.evaluate("//td[contains(text(),'api/v2/private/audit-log-report/regular/execute/')]/../td[1]", document, null, XPathResult.STRING_TYPE, null).stringValue;
        }
        if (type == 'audit-client')
        {
          task_id = document.evaluate("//td[contains(text(),'api/v2/private/audit-log-report/client/execute/')]/../td[1]", document, null, XPathResult.STRING_TYPE, null).stringValue;
        }    

    
      await fetch("https://"+subdomain+"."+domain+"/api/v2/update-pending-task-eta/"+task_id+"/", {
          
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Token ${token}`
        }
      })
        .then(response => response.json())
        .then(data => {
          alert("Executed the pending task successfully [TASK ID : "+ task_id +" ]");
          document.getElementById("execute_task").innerHTML="Execute";
        })
        .catch(error => {
          console.error("Error:", error);
          alert("An error occurred while executing the pending task.");
          document.getElementById("execute_task").innerHTML="Execute";
        });
    }


function renderTicketDetailsData(data) {
  document.getElementById("myTicketDetailsNav").style.width = "100%";
  const tableBody = document.getElementById('ticketdetailsdata').getElementsByTagName('tbody')[0];
      tableBody.innerHTML = '';
    document.getElementById("ticketdetailstable").style.display="block";
    const datatable = document.getElementById("ticketdetailsdata");
    const ticketid = parseInt(data.display_id.replace(/[^0-9]/g,""),10)
    
    // Define Actions
    document.getElementById("ticketactions").innerHTML = `<button style='color:blue;' id='addreply' value='${ticketid}' type=button onClick="javascript:ticketUpdate('${ticketid}','reply');"><i class="fa fa-reply fa-2x"></i>
        &nbsp;&nbsp;&nbsp;
        <button style='color:red;' id='addpvt' value='${ticketid}' type=button onClick="javascript:ticketUpdate('${ticketid}','pvt');"><i class="fa fa-sticky-note fa-2x"></i>
        &nbsp;&nbsp;&nbsp;
        <button style='color:red;' id='delTicket' value='${ticketid}' type=button onClick="javascript:ticketDelete('${ticketid}');"><i class="fa fa-trash fa-2x"></i>
          <button style='color:green;' id='addtimespent' value='${ticketid}' type=button onClick="javascript:addTimeSpent('${ticketid}');"><i class="fa fa-clock-o fa-2x"></i>`;

            const row = document.createElement('tr');
    row.innerHTML = `
    <td style="padding: 20px;"><a href="${data.display_id}" style="text-decoration:none; color:#FFB900; font-size: 16px;">${data.display_id}</a></td>
        <td style="padding: 20px; font-size: 16px;">${data.subject}</td>
        <td style="padding: 20px; font-size: 16px;">${data.contact.name}</td>
        <td style="padding: 20px; font-size: 16px;">${data.contact.email}</td>
        <td style="padding: 20px; font-size: 16px; color:#28A745;">${data.status.name}</td>
        <td style="padding: 20px; font-size: 16px; color:#DC3545; font-weight:bold;">${data.priority.name}</td>
        <td style="padding: 20px; font-size: 16px; color:#007BFF;">${data.category.name}</td>
        <td style="padding: 20px; font-size: 16px;">${data.created_at}</td>
        
    `;
    tableBody.appendChild(row);

    const lastContactmssg = document.createElement('tr');
    lastContactmssg.innerHTML = `<td colspan='8'><b><i class="fa fa-id-card-o" aria-hidden="true"></i>
    Last Contact Message : </b>${data && data.last_contact_message !== null ? data.last_contact_message : 'N/A'}</td>`;
    tableBody.appendChild(lastContactmssg);

    const laststaffreply = document.createElement('tr');
    laststaffreply.innerHTML = `<td colspan='8'><b><i class="fa fa-user-circle" aria-hidden="true"></i>
    Last Staff Message : </b>${data && data.last_staff_reply && data.last_staff_reply.html ? data.last_staff_reply.html : 'N/A'}</td>`;
    tableBody.appendChild(laststaffreply);

    const timeSpent = document.createElement('tr');
    timeSpent.innerHTML = `<td colspan='8'><b><i style='color:green;' class="fa fa-clock-o" aria-hidden="true"></i>
    Time Spent : </b>${data && data.time_spent ? data.time_spent + ` Mins` : 'N/A'} </td>`;
    tableBody.appendChild(timeSpent);

    const tickupdate = document.createElement('tr');
    tickupdate.innerHTML = `<td colspan='8'><b>Latest Updates in the Ticket</b></td>`;
    tableBody.appendChild(tickupdate);

    const updateHeader = document.createElement('tr');
    updateHeader.innerHTML = `<th style="padding: 20px; font-size: 16px;">Update ID</th>
    <th style="padding: 20px; font-size: 16px;">Made By</th>
    <th style="padding: 20px; font-size: 16px;">Name</th>
    <th style="padding: 20px; font-size: 16px;">Timestamp</th>
    <th style="padding: 20px; font-size: 16px;">Change Made</th>`;
    tableBody.appendChild(updateHeader);

    for (let i = 0; i < data.updates.meta.count; i++) {
    
        const row1 = document.createElement('tr');

        row1.innerHTML =  `
    
    <td style="padding: 20px;"><a href="" style="text-decoration:none; color:#FFB900; font-size: 16px;">${data.updates.results[i].id}</a></td>
    <td style="padding: 20px; font-size: 16px;">${data.updates.results[i].by.type}</td>
    <td style="padding: 20px; font-size: 16px;">${data.updates.results[i].by.name}</td>
    <td style="padding: 20px; font-size: 16px;">${data.updates.results[i].timestamp}</td>
    <td style="padding: 20px; font-size: 16px;"> 
    ${data && data.updates.results[i].message ? `<b>Message : </b>` + data.updates.results[i].message.html:''}
    ${data && data.updates.results[i].status_change!=null ? `<b>Status Changed to : </b>` + data.updates.results[i].status_change.to.name:''}
    ${data && data.updates.results[i].priority_change!=null ? `<b>Priority Changed to : </b>` + data.updates.results[i].priority_change.to.name:''}
    ${data && data.updates.results[i].assignee_change!=null ? `<b>Assignee Changed to : </b>` + data.updates.results[i].assignee_change.to.name:''}
    ${data && data.updates.results[i].subject_change!=null ? `<b>Subject Changed to : </b>` + data.updates.results[i].subject_change.to:''}
    ${data && data.updates.results[i].tags_change!=null ? `<b>Tags Added : </b>` + data.updates.results[i].tags_change.to:''}
    ${data && data.updates.results[i].time_spent!=0 ? `<b>Time Spent : </b>` + data.updates.results[i].time_spent + ` Mins`:''}
    ${data && data.updates.results[i].due_date_change!=null ? `<b>Due Date Set: </b>` + data.updates.results[i].due_date_change.to:''}
    </td>
    `;
    tableBody.appendChild(row1);

    }
    
}


function renderemaillog() {
  document.getElementById("mySentEmailNav").style.width = "100%";
  const tableBody = document.getElementById('emaillogdata').getElementsByTagName('tbody')[0];
      tableBody.innerHTML = '';

      
// TODO NOW
  for (let i = 0; i < data.results.length; i++) {
    
    document.getElementById("sentEmailLogTable").style.display="block";
    const datatable = document.getElementById("sentEmailLogTable");
    const item = data.results[i];
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.sender}</td>
      <td>${item.recipients}</td>
      <td>${item.cc}</td>
      <td>${item.bcc}</td>
      <td>${item.email_type}</td>
      <td>${item.subject}</td>
      <td>${item.ticket_id}</td>
      <td>${item.update_id}</td>
      <td>${item.delivery_status}</td>
      <td>${item.delivery_message}</td>
      <td>${item.updated_at}</td>

      <td class="actions">
        <button style='color:blue;' id='edtTicket' value='${ticketid}' type=button onClick="javascript:ticketReply('${ticketid}');"><i class="fa fa-pencil-square-o"></i>
        <button style='color:red;' id='delTicket' value='${ticketid}' type=button onClick="javascript:ticketDelete('${ticketid}');"><i class="fa fa-trash"></i>
        
        </td>
    `;
    tableBody.appendChild(row);
        
  }

  renderemaillogPagination(data.meta.count);
}

function renderemaillogPagination(totalItems) {
  const totalPages = Math.ceil(totalItems / 50);
let emailLogPagination = document.getElementById('emaillogpagination');
emailLogPagination.innerHTML = '';

  if (currentPage > 1) {
    const prevButton = document.createElement('a');
    prevButton.innerText = 'Prev';
    prevButton.addEventListener('click', () => {
      currentPage--;
      getSentEmailLogsData().then(renderemaillog);
    });
    emailLogPagination.appendChild(prevButton);
  }

 // Display up to 3 page buttons at a time, centered on the current page
 const startPage = Math.max(1, currentPage - 1);
  const endPage = Math.min(totalPages, startPage + 8);
  if (startPage > 1) {
    const firstButton = document.createElement('a');
    firstButton.innerText = '1';
    firstButton.addEventListener('click', () => {
      currentPage = 1;
      offset = 0;
      getSentEmailLogsData().then(renderemaillog);
    });
    emailLogPagination.appendChild(firstButton);
    if (startPage > 2) {
      const ellipsis = document.createElement('span');
      ellipsis.innerText = '...';
      ellipsis.className = 'ellipsis';
      emailLogPagination.appendChild(ellipsis);
    }
  }
  for (let i = startPage; i <= endPage; i++) {
    const pageButton = document.createElement('a');
    pageButton.innerText = i;
    if (i === currentPage) {
      pageButton.classList.add('active');
    } else {
      pageButton.addEventListener('click', () => {
        currentPage = i;
        offset = (i - 1) * limit;
        getSentEmailLogsData().then(renderemaillog);
      });
    }
    emailLogPagination.appendChild(pageButton);
  }
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      const ellipsis = document.createElement('a');
      ellipsis.innerText = '...';
      ellipsis.className = 'ellipsis';
      emailLogPagination.appendChild(ellipsis);
    }
    const lastButton = document.createElement('a');
    lastButton.innerText = totalPages;
    lastButton.addEventListener('click', () => {
      currentPage = totalPages;
      offset = (totalPages - 1) * limit;
      getSentEmailLogsData().then(renderemaillog);
    });
    emailLogPagination.appendChild(lastButton);
  }
  // Only display the next button if we're not on the last page
  if (currentPage < totalPages) {
    const nextButton = document.createElement('a');
    nextButton.innerText = 'Next';
    nextButton.addEventListener('click', () => {
      currentPage += 1;
      offset = currentPage * limit;
      getSentEmailLogsData().then(renderemaillog);
    });
    emailLogPagination.appendChild(nextButton);
  }
}


function renderticketdata(data) {
  document.getElementById("myTicketNav").style.width = "100%";
  const tableBody = document.getElementById('ticketdata').getElementsByTagName('tbody')[0];
      tableBody.innerHTML = '';

      
// TODO NOW
  for (let i = 0; i < data.results.length; i++) {
    
    document.getElementById("tickettable").style.display="block";
    const datatable = document.getElementById("tickettable");
    const item = data.results[i];
    const ticketid = parseInt(item.display_id.replace(/[^0-9]/g,""),10)
        const row = document.createElement('tr');
    row.innerHTML = `
      <td><a href='#' onclick='javascript:getTicketDetails(${item.id}).then(renderTicketDetailsData);'>${item.display_id}</a></td>
      <td>${item.subject}</td>
      <td>${item.contact.name}</td>
      <td>${item.contact.email}</td>
      <td>${item.status.name}</td>
      <td>${item.priority.name}</td>
      <td>${item.category.name}</td>
      <td>${item.created_at}</td>
      <td class="actions">
        <button style='color:blue;' id='edtTicket' value='${ticketid}' type=button onclick='javascript:getTicketDetails(${item.id}).then(renderTicketDetailsData);'><i class="fa fa-pencil-square-o"></i>
        <button style='color:red;' id='delTicket' value='${ticketid}' type=button onClick="javascript:ticketDelete('${ticketid}');"><i class="fa fa-trash"></i>
        
        </td>
    `;
    tableBody.appendChild(row);
        
  }

  renderTicketPagination(data.meta.count);
}

function searchicket()
{
// Add search functionality Starts
const searchContainer = document.getElementById('searchContainer');
const searchButton = document.getElementById('searchtickets');
searchButton.addEventListener('click', () => {
  currentPage = 1;
  offset = 0;
  const searchText = document.getElementById('ticketsearchinput').value.trim().toLowerCase();
  filteredData = data.results.filter(item => {
    return (
      item.subject.toLowerCase().includes(searchText) ||
      item.contact.name.toLowerCase().includes(searchText) ||
      item.display_id.toLowerCase().includes(searchText) ||
      item.subject.toLowerCase().includes(searchText)
    );
  });
  let results = {"meta":{"count":filteredData.length},"results":filteredData}
  
  renderticketdata(results);
  totalItems = filteredData.length;
  totalPages = Math.ceil(totalItems / limit);
  renderTicketPagination(totalItems);
});
}

function renderTicketPagination(totalItems) {
  const totalPages = Math.ceil(totalItems / 50);
let ticketpagination = document.getElementById('ticketpagination');
ticketpagination.innerHTML = '';

  if (currentPage > 1) {
    const prevButton = document.createElement('a');
    prevButton.innerText = 'Prev';
    prevButton.addEventListener('click', () => {
      currentPage--;
      getTicketData().then(renderticketdata);
    });
    ticketpagination.appendChild(prevButton);
  }


//New code



 // Display up to 3 page buttons at a time, centered on the current page
 const startPage = Math.max(1, currentPage - 1);
  const endPage = Math.min(totalPages, startPage + 8);
  if (startPage > 1) {
    const firstButton = document.createElement('a');
    firstButton.innerText = '1';
    firstButton.addEventListener('click', () => {
      currentPage = 1;
      offset = 0;
      getTicketData().then(renderticketdata);
    });
    ticketpagination.appendChild(firstButton);
    if (startPage > 2) {
      const ellipsis = document.createElement('span');
      ellipsis.innerText = '...';
      ellipsis.className = 'ellipsis';
      ticketpagination.appendChild(ellipsis);
    }
  }
  for (let i = startPage; i <= endPage; i++) {
    const pageButton = document.createElement('a');
    pageButton.innerText = i;
    if (i === currentPage) {
      pageButton.classList.add('active');
    } else {
      pageButton.addEventListener('click', () => {
        currentPage = i;
        offset = (i - 1) * limit;
        getTicketData().then(renderticketdata);
      });
    }
    ticketpagination.appendChild(pageButton);
  }
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      const ellipsis = document.createElement('a');
      ellipsis.innerText = '...';
      ellipsis.className = 'ellipsis';
      ticketpagination.appendChild(ellipsis);
    }
    const lastButton = document.createElement('a');
    lastButton.innerText = totalPages;
    lastButton.addEventListener('click', () => {
      currentPage = totalPages;
      offset = (totalPages - 1) * limit;
      getTicketData().then(renderticketdata);
    });
    ticketpagination.appendChild(lastButton);
  }
  // Only display the next button if we're not on the last page
  if (currentPage < totalPages) {
    const nextButton = document.createElement('a');
    nextButton.innerText = 'Next';
    nextButton.addEventListener('click', () => {
      currentPage += 1;
      offset = currentPage * limit;
      getTicketData().then(renderticketdata);
    });
    ticketpagination.appendChild(nextButton);
  }



// New Code End
}


// Generic Delete

async function genericDelete(otype) {
    document.getElementById('ticketinfo').innerHTML = "";
    document.getElementById("ticketinfo").innerHTML='Preparing to delete a '+ otype;
    document.getElementById("ticketinfo").innerHTML='deleting a '+otype+'...';
    document.getElementById("del"+otype).disabled = true;
    document.getElementById('ticketinfo').innerHTML = "Deleting...";
    document.getElementById('ticketinfo').innerHTML = otype + " Deletion is inprogress...";
    
    let data,type,url, request_type;
    if (otype=="statuses")
    {
    url = "https://"+subdomain+"."+domain+"/api/v2/"+otype+"/"+sStatus+"/actions/delete/"
    request_type = 'POST'
    }
    else if (otype=="categories")
    {
    url = "https://"+subdomain+"."+domain+"/api/v2/"+otype+"/"+sCategory+"/"
    request_type = 'DELETE'
    }
    else if (otype=="contacts")
    {
    url = "https://"+subdomain+"."+domain+"/api/v2/"+otype+"/"+sContact+"/"
    request_type = 'DELETE'
    }
    else if (otype=="priorities")
    {
    url = "https://"+subdomain+"."+domain+"/api/v2/"+otype+"/"+sPriority+"/actions/delete/"
    request_type = 'POST'
    }
    else
    objid = ""
    let newobj, res = ""

    try {
        res = await fetch(url, {
  method: request_type, // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + token
  },
})

        
if(res.status!=204 && res.status!=202)
    {
        newobj = Object.assign({}, await res.json());
        let message = JSON.stringify(newobj).replace("non_field_errors","").replace(/[\(\)\]\[\}\{\:\"]/g, "");
        alert(otype.value + " deletion failure..." + res.status + " : " + message)  ;
        document.getElementById('ticketinfo').innerHTML = otype + " deletion failure..." + res.status + " : " + message;
        if (message.includes('This field'))
        document.getElementById('ticketinfo').innerHTML = otype + " " +document.getElementById("status").text+ " deletion have Dependency...";
        document.getElementById("del"+otype).disabled = false;
        return false;
    }
        
    } catch (error) {
        alert(otype + " deletion failure..."+ error);
        document.getElementById('ticketinfo').innerHTML = otype + " deletion failure..." + error;
        document.getElementById("del"+otype).disabled = false;
        console.log(error);
        return false;
    }

    document.getElementById('ticketinfo').innerHTML = "";
    document.getElementById('ticketinfo').innerHTML = otype +" deleted is "+ document.getElementById("status").text;
    document.getElementById("del"+otype).disabled = false;
    alert(otype + " deletion successfully Completed!!");
    synchnow(subdomain);
}


// Ticket Delete

async function ticketDelete(ticket_id) {
  var result = confirm("Are you sure you want to delete this ticket?");
  if(result)
  {
    document.getElementById('ticketinfo').innerHTML = "";
    document.getElementById("ticket_list_info").innerHTML='Preparing to delete ticket'+ticket_id;
    document.getElementById("ticket_list_info").innerHTML='deleting a ticket...';
    document.getElementById('ticket_list_info').innerHTML = "Ticket " + ticket_id +" Deletion is inprogress...";
    
    
    url = "https://"+subdomain+"."+domain+"/api/v2/tickets/"+ticket_id+"/";
  
    let newobj, res = ""

    try {
        res = await fetch(url, {
  method: 'DELETE', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + token
  },
})

        
if(res.status!=204)
    {
        newobj = Object.assign({}, await res.json());
        let message = JSON.stringify(newobj).replace("non_field_errors","").replace(/[\(\)\]\[\}\{\:\"]/g, "");
        alert("Ticket deletion failure..." + res.status + " : " + message)  ;
        document.getElementById('ticket_list_info').innerHTML = "Ticket deletion failure..." + res.status + " : " + message;
        return false;
    }
        
    } catch (error) {
        alert("Ticket deletion failure..."+ error);
        document.getElementById('ticket_list_info').innerHTML = "Ticket deletion failure..." + error;
        console.log(error);
        return false;
    }

    document.getElementById('ticket_list_info').innerHTML = "";
    document.getElementById('ticket_list_info').innerHTML = "Ticket of id <b>"+ ticket_id+ " </b> is deleted successfully";
    alert("Ticket deletion of ID " + ticket_id +" successfully Completed!!");
    closeTicketDetailsNav();
    getTicketData('1').then(renderticketdata);
    document.getElementById('ticket_list_info').innerHTML ="";
  }
  else
  {
    return false;
  }
}

// Notifcation Center Functions

// Function to fetch and display notifications
async function fetchNotifications() {
    const baseUrl = "https://"+subdomain+"."+domain+"/api/v2/notifications/";
    document.getElementById('ticketinfo').innerHTML = "Fetching Notification Settings...";
    const notificationIds = [1, 2, 3, 4,6,7,11,12,13,15];
  
    try {
      // Fetch notifications for each ID
      const fetchPromises = notificationIds.map(async (id) => {
        const response = await fetch(`${baseUrl}${id}/`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Token ' + token
            },
          });
        if (!response.ok) {
          throw new Error(`Failed to fetch notification ${id}`);
        }
        return response.json();
      });
  
      // Wait for all fetch requests to complete
      const notifications = await Promise.all(fetchPromises);
  
    const notificationStrip = document.getElementById('notificationStrip');
    notificationStrip.innerHTML = '';
    notificationStrip.classList.add('custom-notification-strip');
    notificationStrip.innerHTML = '<span class="notification-text">🔔 Notification Enable/Disable </span> <br><br>';

    notifications.forEach((notification) => {
        const notificationElement = document.createElement('div');
        
        notificationElement.classList.add('notification');
        const notificationName = notification.name.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        notificationElement.innerHTML = `
        <span><input type="checkbox" data-notification-name="${notificationName}" data-notification-id="${notification.id}" ${notification.is_enabled ? 'checked' : ''}>
          ${notificationName}
          </span>
        `;
        const checkbox = notificationElement.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', toggleNotification);
        notificationStrip.appendChild(notificationElement);
      });

      document.getElementById('ticketinfo').innerHTML = "Notification " + notificationName + " Settings Changed";

    } catch (error) {
        document.getElementById('ticketinfo').innerHTML ='Error fetching notifications:'+ error;
    }
  }
  
  // Function to toggle a notification's enabled status
  async function toggleNotification(event) {
    const notificationId = event.target.dataset.notificationId;
    const name = event.target.dataset.notificationName;
    const isEnabled = event.target.checked;
  
    try {
      const response = await fetch("https://"+subdomain+"."+domain+"/api/v2/notifications/"+notificationId+"/", {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + token
        },
        body: JSON.stringify({ is_enabled: isEnabled }),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to toggle notification ${name}`);
      }
      document.getElementById('ticketinfo').innerHTML = "Notification " + name + " is set to "+isEnabled;
    } catch (error) {
        document.getElementById('ticketinfo').innerHTML ='Error toggling notification:'+ error;
    }
  }

  // Function to Create a Random Ticket
  async function ticketRandomizer(rType)
  {

    const dropdowns = [
        document.getElementById('category'),
        document.getElementById('status'),
        document.getElementById('priority'),
        document.getElementById('contacts')
      ];

      dropdowns.forEach((dropdown) => {
        const options = dropdown.options;
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * dropdown.options.length);
          } while (randomIndex === 0);
          
        dropdown.selectedIndex = randomIndex;
        let type = dropdown.id;
        let value = dropdown[randomIndex].value;
        if(type=="category")  
        sCategory = parseInt(value);
        else if(type=="status")  
         sStatus= parseInt(value);  
        else if(type=="priority")  
        sPriority = parseInt(value);
        else if(type=="contacts")  
        sContact = parseInt(value);  
      });

      if(rType!="random")
      {
      random_ticket = true;
      ticketCreation();
      }

  }

  async function oneClickPendingTaskExecute(type)
  {
      var tdValue = "";

        if (type = 'contact')
        tdValue = document.evaluate("//td[contains(text(),'api/v2/private/contact/activities/execute/')]/../td[1]", document, null, XPathResult.STRING_TYPE, null).stringValue;
        if (type = 'audi-login')
        tdValue = document.evaluate("//td[contains(text(),'api/v2/private/contact/activities/execute/')]/../td[1]", document, null, XPathResult.STRING_TYPE, null).stringValue;
        if (type = 'audi-regular')
        tdValue = document.evaluate("//td[contains(text(),'api/v2/private/contact/activities/execute/')]/../td[1]", document, null, XPathResult.STRING_TYPE, null).stringValue;
        if (type = 'audi-client')
        tdValue = document.evaluate("//td[contains(text(),'api/v2/private/contact/activities/execute/')]/../td[1]", document, null, XPathResult.STRING_TYPE, null).stringValue;
    
        executePendingTasks(tdValue);

  }
  

