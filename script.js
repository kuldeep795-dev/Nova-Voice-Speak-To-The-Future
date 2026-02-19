let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){

     content.innerText = text;


    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=0.8
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours <16){
        speak("Good afternoon Sir")
    }else{
        speak("Good Evening Sir")
    }
}
// window.addEventListener('load',()=>{
//     wishMe()
// })
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition 
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText="🎤 " + transcript;
   takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    voice.style.display="block"
    btn.style.display="none"
})
function takeCommand(message){
   voice.style.display="none"
    btn.style.display="flex"

    if(message.includes("hello nova")||message.includes("hey") ||message.includes("hello Nova")|| message.includes("hey noah")|| message.includes("hello")){
        speak("hello, how are you?")
    }
    else if(message.includes("i am fine")|| message.includes("i'm fine")){
        speak("glad to hear that")
    }
     else if(message.includes("i love you")){
        speak("आई लव यू")
    }

     else if(message.includes("tell me a morning routine in hindi")){
        speak("सुप्रभात! अब सुनिए, आपका कल का पूरा दिन कुछ इस तरह रहेगा — सुबह साढ़े छह बजे उठ जाइए, पानी पीजिए और ताज़ा हो जाइए। सात बजे से साढ़े सात बजे तक हल्का व्यायाम कीजिए।")
    }
     else if(message.includes("tell me a morning routine")){
        speak("okay my lord! Now listen, your day tomorrow will be like this: wake up at 6:30 a.m., drink water, and freshen up. Do some light exercise from 7 a.m. to 7:30 a.m.")
    }
     else if(message.includes("tell me a morning routine.")){
        speak("okay my lord! Now listen, your day tomorrow will be like this: wake up at 6:30 a.m., drink water, and freshen up. Do some light exercise from 7 a.m. to 7:30 a.m.")
    }
    else if(message.includes("thank you so much")){
        speak("this is my pleasure my lord")
    }
    else if(message.includes("tell me a full day routine")){
        speak("Hello. So You can start your day early — wake up around 6 a.m., freshen up, drink some water, and get ready for the day; from 6 a.m. to 8 a.m., you can study, as morning time is peaceful and your mind is fresh, making it great for learning tough subjects like Math or Science; after that, have your breakfast around 8 a.m. and get ready for school; then, from 8:30 a.m. to 2:30 p.m., attend your school or college classes — listen carefully, take notes, and ask questions; after coming home, have your lunch around 2:30 or 3 p.m., then take a short rest to relax your mind and body; start your evening study time from 4 p.m. to 6 p.m., which is a great time to revise what you learned in school and finish your homework; after that, take a break — go out to play or exercise from 6 p.m. to 7 p.m., as physical activity keeps you healthy and refreshed; then, from 7:30 p.m. to 9 p.m., do your night study to prepare for upcoming tests, read new lessons, or practice questions; after that, have dinner around 9 p.m., spend a little time with your family, relax your mind, and avoid your phone before bed; finally, go to sleep by 10 p.m., as a good night’s rest helps you wake up fresh and ready for another productive day.")
    }
    else if(message.includes("who invented you")){
        speak("Kartik and team")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://youtube.com/","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://google.com/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://facebook.com/","_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://instagram.com/","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator..")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp..")
        window.open("whatsapp://")
    }
    else if (message.includes("time") || message.includes("tell me time")) {
    let time = new Date();
    let currentTime = time.toLocaleString(undefined, { hour: "numeric", minute: "numeric", hour12: true });
    speak(" अभी का समय है  यानी current time is " + currentTime);
}

else if (message.includes("date") || message.includes("tell me date")) {
    let today = new Date();
    let currentDate = today.toLocaleDateString("en-US", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
    speak("आज की तारीख है " + currentDate + ", that means today’s date is " + currentDate);
}


    // ---- Many additional daily commands (same if/else-if style) ----
    else if(message.includes("what is your name")){
        speak("I am NOVAVOICE, your virtual assistant.")
    }
    else if(message.includes("how are you")){
        speak("I am fine, thank you! How are you?")
    }
    else if(message.includes("what can you do")){
        speak("I can open websites, tell time, date, weather, play music, and help with many tasks.")
    }
    else if (message.includes("weather") || message.includes("temperature" || message.includes("climate")) || message.includes("weather gorakhpur") || message.includes("climate gorakhpur" || message.includes("mausam btao"))){
        speak("Checking the live weather, please wait...");
        window.open("https://www.accuweather.com/en/in/gorakhpur/191048/weather-forecast/191048","_blank")
    }
    else if(message.includes("play music")){
        speak("Playing music from your default music site.")
        window.open("https://www.yout-ube.com/watch?v=dXl2NdlmeIE&list=RDdXl2NdlmeIE&start_radio=1&t=29s","_blank")
    }
    else if(message.includes("set alarm")){
        speak("Tell me the time and I will remind you.")
    }
    else if(message.includes("latest news")){
        speak("Opening latest news for you.")
        window.open("https://news.google.com/","_blank")
    }
    else if(message.includes("translate hello to hindi")){
        speak("Hello in Hindi is नमस्ते")
    }
    else if(message.includes("translate hello to english")){
        speak("Hello in English is Hello")
    }
    else if(message.includes("how old are you")){
        speak("I don't age, I just get updates.")
    }
    else if(message.includes("who is the president of india")){
        speak("The president of India is द्रौपदी मुर्मू.")
    }
    else if(message.includes("who is the prime minister")){
        speak("The Prime Minister is नरेंद्र मोदी.")
    }
    else if(message.includes("open twitter")){
        speak("Opening Twitter.")
        window.open("https://twitter.com/","_blank")
    }
    else if(message.includes("open linkedin")){
        speak("Opening LinkedIn.")
        window.open("https://linkedin.com/","_blank")
    }
    else if(message.includes("open github")){
        speak("Opening GitHub.")
        window.open("https://github.com/","_blank")
    }
    else if(message.includes("open stackoverflow")){
        speak("Opening Stack Overflow.")
        window.open("https://stackoverflow.com/","_blank")
    }
    else if(message.includes("calculate")){
        speak("I can calculate. Tell me the expression like 2 plus 2 or 10 times 3.")
    }
    else if(message.includes("what is the capital of india")){
        speak("The capital of India is New Delhi.")
    }
    else if(message.includes("good morning")){
        speak("Good morning! Have a nice day.")
    }
    else if(message.includes("good night")){
        speak("Good night! Sweet dreams.")
    }
    else if(message.includes("tell me a joke")){
        speak("एक दिन जंगल में एक बंदर को मोबाइल फोन मिल गया, वो खुश होकर बोला “वाह! अब मैं भी इंस्टाग्राम पर फेमस बनूँगा!, फिर वो शेर, हाथी और साँप के साथ सेल्फी लेने लगा, लेकिन जैसे ही साँप ने फुफकार मारी, बंदर घबरा गया और मोबाइल गिरा दिया, मोबाइल टूट गया, बंदर उदास होकर बोला — “अब तो मेरा नेटवर्क भी चला गया, और नेटवर्थ भी!")
    }
    else if(message.includes("motivate me")){
        speak("Believe in yourself. Every expert was once a beginner.")
    }
    else if(message.includes("open amazon")){
        speak("Opening Amazon.")
        window.open("https://www.amazon.in/","_blank")
    }
    else if(message.includes("open flipkart")){
        speak("Opening Flipkart.")
        window.open("https://www.flipkart.com/","_blank")
    }
    else if(message.includes("who is elon musk")){
        speak("Elon Musk is an entrepreneur, founder of Space X and CEO of Tesla.")
    }
    else if(message.includes("how many human languages do you know")){
        speak("I can speak in Hindi and English and understand many other languages.")
    }
    else if(message.includes("convert km to miles")){
        speak("Multiply kilometers by 0.621371 to get miles.")
    }
    else if(message.includes("what is bmi")){
        speak("BMI is body mass index. It's weight in kilograms divided by height in meters squared.")
    }
    else if(message.includes("who is bill gates")){
        speak("Bill Gates is co-founder of Microsoft.")
    }
    else if(message.includes("who is mark zuckerberg")){
        speak("Mark Zuckerberg is the co-founder and CEO of Meta.")
    }
    else if(message.includes("what is bitcoin")){
        speak("Bitcoin is a decentralized digital currency. For latest price check online.")
    }
    else if(message.includes("how to lose weight")){
        speak("Maintain a calorie deficit, eat healthy, and exercise regularly.")
    }
    else if(message.includes("how to gain weight")){
        speak("Eat more calories than you burn and include strength training.")
    }
    else if(message.includes("open netflix")){
        speak("Opening Netflix.")
        window.open("https://www.netflix.com/","_blank")
    }
    else if(message.includes("open prime video")){
        speak("Opening Prime Video.")
        window.open("https://www.primevideo.com/","_blank")
    }
    else if(message.includes("how to learn python")){
        speak("Start with basics like variables, loops, functions, then build small projects.")
    }
    else if(message.includes("how to learn javascript")){
        speak("Practice DOM manipulation, events, and build small web apps.")
    }
    else if(message.includes("what is photosynthesis")){
        speak("Photosynthesis is the process by which plants convert light energy into chemical energy.")
    }
    else if(message.includes("tell me a story")){
        speak("Once upon a time, a curious student built an assistant named NOVA...")
    }
    else if(message.includes("what is the tallest building")){
        speak("The tallest building in the world is Burj Khalifa in Dubai.")
    }
    else if(message.includes("what is the fastest animal")){
        speak("The fastest land animal is the cheetah.")
    }
    else if(message.includes("how far is the moon")){
        speak("The moon is approximately 384,400 kilometers away from Earth.")
    }
    else if(message.includes("who won the world cup")){
        speak("I can check the latest winner for you. Opening results.")
        window.open("https://www.icc-cricket.com/","_blank")
    }
    else if(message.includes("open reddit")){
        speak("Opening Reddit.")
        window.open("https://www.reddit.com/","_blank")
    }
    else if(message.includes("open quora")){
        speak("Opening Quora.")
        window.open("https://www.quora.com/","_blank")
    }
    else if(message.includes("open discord")){
        speak("Opening Discord.")
        window.open("https://discord.com/","_blank")
    }
    else if(message.includes("open telegram")){
        speak("Opening Telegram.")
        window.open("https://web.telegram.org/","_blank")
    }
    else if(message.includes("open maps")){
        speak("Opening Google Maps.")
        window.open("https://www.google.com/maps","_blank")
    }
    else if(message.includes("what is covid")){
        speak("COVID-19 is a contagious disease caused by the coronavirus SARS-CoV-2.")
    }
    else if(message.includes("who is sachin tendulkar")){
        speak("Sachin Tendulkar is a legendary Indian cricketer.")
    }
    else if(message.includes("who is virat kohli")){
        speak("Virat Kohli is an Indian international cricketer.")
    }
    else if(message.includes("open gmail")){
        speak("Opening Gmail.")
        window.open("https://mail.google.com/","_blank")
    }
    else if(message.includes("open outlook")){
        speak("Opening Outlook.")
        window.open("https://outlook.live.com/","_blank")
    }
    else if(message.includes("show me the news")){
        speak("Opening news.")
        window.open("https://news.google.com/","_blank")
    }
    else if(message.includes("remind me")){
        speak("Tell me what to remind and at what time.")
    }
    else if(message.includes("how to make tea")){
        speak("Boil water, add tea leaves, add milk and sugar to taste.")
    }
    else if(message.includes("how to cook rice")){
        speak("Rinse rice, boil water, add rice, cover and simmer until cooked.")
    }
    else if(message.includes("what is the currency of india")){
        speak("The currency of India is the Indian Rupee.")
    }
    else if(message.includes("what is the population of india")){
        speak("India's population is over 1.4 billion approximately.")
    }
    else if(message.includes("how to tie a tie")){
        speak("There are many styles. The simplest is the four-in-hand knot. You can watch a short tutorial online.")
    }
    else if(message.includes("what is the meaning of life")){
        speak("The meaning of life is a philosophical question — find purpose in what you love.")
    }
    else if(message.includes("open calculator app")){
        speak("Opening Calculator.")
        window.open("calculator://")
    }
    else if(message.includes("what is 2 plus 2")){
        speak("Two plus two equals four.")
    }
    else if(message.includes("what is ten times ten")){
        speak("Ten times ten equals one hundred.")
    }
    else if(message.includes("how many planets are there")){
        speak("There are eight planets in the solar system.")
    }
    else if(message.includes("who discovered gravity")){
        speak("Gravity was famously described by Sir Isaac Newton.")
    }
    else if(message.includes("play youtube video")){
        speak("Opening YouTube for videos.")
        window.open("https://youtube.com/","_blank")
    }
    else if(message.includes("open aktu website")){
        speak("Opening aktu login page")
        window.open("https://erp.aktu.ac.in/login.aspx","_blank")
    }
    else if(message.includes("tell me the time in london")){
        speak("Let me check the time in London.")
        window.open("https://www.timeanddate.com/worldclock/uk/london","_blank")
    }
    else if(message.includes("how many hours in a day")){
        speak("There are 24 hours in a day.")
    }
    else if(message.includes("how many minutes in an hour")){
        speak("There are 60 minutes in an hour.")
    }
    else if(message.includes("what is a palindrome")){
        speak("A palindrome is a word or phrase that reads the same backward and forward.")
    }
    else if(message.includes("define computer")){
        speak("A computer is an electronic device that processes data according to instructions.")
    }
    else if(message.includes("what is programming")){
        speak("Programming is writing instructions for computers to perform tasks.")
    }
    else if(message.includes("how to format a usb")){
        speak("Plug in the USB, right-click the drive in your file manager and choose format.")
    }
    else if(message.includes("where is my phone")){
        speak("I can't locate physical devices yet. Try calling your phone from another device.")
    }
    else if(message.includes("open camera")){
        speak("Opening camera.")
        window.open("camera://")
    }
    else if(message.includes("turn on flashlight")){
        speak("I can't control hardware flashlight from browser. Use your device controls.")
    }
    else if(message.includes("how to reset password")){
        speak("Usually you go to account settings and choose reset password. Follow the website instructions.")
    }
    else if(message.includes("what is email")){
        speak("Email is electronic mail used to send messages over the internet.")
    }
    else if(message.includes("how to make resume")){
        speak("Start with your contact info, a summary, experience, education, and skills.")
    }
    else if(message.includes("how to apply for job")){
        speak("Search job portals, prepare your CV and cover letter, and apply online.")
    }
    else if(message.includes("what is ai")){
        speak("AI stands for Artificial Intelligence — machines that perform tasks that usually require human intelligence.")
    }
    else if(message.includes("what is machine learning")){
        speak("Machine learning is a subset of AI where systems learn from data.")
    }
    else if(message.includes("what is deep learning")){
        speak("Deep learning uses neural networks with many layers to learn complex patterns.")
    }
    else if(message.includes("open spotify")){
        speak("Opening Spotify.")
        window.open("https://open.spotify.com/","_blank")
    }
    else if(message.includes("open maps")){
        speak("Opening Google Maps.")
        window.open("https://www.google.com/maps","_blank")
    }
    else if(message.includes("how to save money")){
        speak("Create a budget, reduce unnecessary expenses, and save a portion every month.")
    }
    else if(message.includes("how to invest money")){
        speak("Diversify investments, research options like mutual funds, stocks, and fixed deposits.")
    }
    else if(message.includes("what is stock market")){
        speak("The stock market is where shares of companies are bought and sold.")
    }
    else if(message.includes("what is interest rate")){
        speak("Interest rate is the percentage charged on borrowed money or paid on savings.")
    }
    else if(message.includes("what is inflation")){
        speak("Inflation is the general rise in prices over time, reducing purchasing power.")
    }
    else if(message.includes("open ebay")){
        speak("Opening eBay.")
        window.open("https://www.ebay.com/","_blank")
    }
    else if(message.includes("open cnn")){
        speak("Opening CNN news.")
        window.open("https://www.cnn.com/","_blank")
    }
    else if(message.includes("what is 100 minus 37")){
        speak("One hundred minus thirty-seven equals sixty-three.")
    }
    else if(message.includes("what is square root of 64")){
        speak("The square root of sixty-four is eight.")
    }
    else if(message.includes("how to start a YouTube channel")){
        speak("Choose a niche, create content plan, and upload regularly with good thumbnails.")
    }
    else if(message.includes("how to edit videos")){
        speak("Use video editing software like Premiere Pro, DaVinci Resolve or free options like Shotcut.")
    }
    else if(message.includes("what is html")){
        speak("HTML is the markup language used to build web pages.")
    }
    else if(message.includes("what is css")){
        speak("CSS styles web pages and controls their look and layout.")
    }
    else if(message.includes("what is javascript")){
        speak("JavaScript adds interactivity to web pages.")
    }
    else if(message.includes("how to clear cache")){
        speak("Open browser settings and clear browsing data or cache.")
    }
    else if(message.includes("how to update windows")){
        speak("Go to Windows Update in settings and check for updates.")
    }
    else if(message.includes("how to take screenshot")){
        speak("Press PrtScn on Windows or Command+Shift+3 on Mac to take screenshot.")
    }
    else if(message.includes("how to check wifi password")){
        speak("On Windows, check saved networks in Wi-Fi settings or router admin page.")
    }
    else if(message.includes("how to burn calories fast")){
        speak("High intensity interval training and cardio help burn calories quickly.")
    }
    else if(message.includes("what is a balanced diet")){
        speak("A balanced diet includes proteins, carbohydrates, fats, vitamins, and minerals.")
    }
    else if(message.includes("how to meditate")){
        speak("Find a quiet place, sit comfortably, focus on your breath, and relax.")
    }
    else if(message.includes("how to reduce stress")){
        speak("Exercise, sleep well, meditate, and talk to someone you trust.")
    }
    else if(message.includes("what is depression")){
        speak("Depression is a medical condition; seek professional help if you feel persistently low.")
    }
    else if(message.includes("emergency numbers")){
        speak("In India, emergency number is 112. For specific services, check local listings.")
    }
    else if(message.includes("how to change password on gmail")){
        speak("Go to Google Account > Security > Signing in to Google > Password.")
    }
    else if(message.includes("how to delete account")){
        speak("Account deletion steps vary by service; check their official help pages for instructions.")
    }
    else if(message.includes("check bitcoin price")){
        speak("I can fetch current prices online wait...")
        window.open("https://www.coindesk.com/price/bitcoin","_blank")
    }
    else if(message.includes("what is gold price")){
        speak("Opening gold price details online.")
        window.open("https://www.kitco.com/","_blank")
    }
    else if(message.includes("how to check air quality")){
        speak("Open Air Quality Index websites or apps to check your city AQI.")
        window.open("https://aqicn.org/map/world/","_blank")
    }
    else if(message.includes("what is my ip")){
        speak("Opening a site to show your public IP address.")
        window.open("https://www.whatismyip.com/","_blank")
    }
    else if(message.includes("how to change ringtone")){
        speak("Ringtone settings are in your phone's sound settings. Choose desired tone.")
    }
    else if(message.includes("how to connect bluetooth")){
        speak("Enable Bluetooth in settings, search for devices and pair them.")
    }
    else if(message.includes("what is ethernet")){
        speak("Ethernet is wired network connectivity using cables for internet.")
    }
    else if(message.includes("how to speed up pc")){
        speak("Uninstall unused apps, disable startup programs and scan for malware.")
    }
    else if(message.includes("how to backup phone")){
        speak("Use cloud backups like Google Drive or iCloud to backup app data and media.")
    }
    else if(message.includes("how to recover deleted files")){
        speak("Check recycle bin or use file recovery tools if not overwritten.")
    }
    else if(message.includes("how to format phone")){
        speak("Factory reset is in settings but backup your data first.")
    }
    else if(message.includes("what is 5 factorial")){
        speak("Five factorial equals one hundred and twenty.")
    }
    else if(message.includes("how to grow hair")){
        speak("Eat protein-rich foods, take care of scalp and avoid stress.")
    }
    else if(message.includes("how to whiten teeth")){
        speak("Maintain oral hygiene and consult a dentist for professional options.")
    }
    else if(message.includes("what is lactose intolerance")){
        speak("Lactose intolerance is difficulty digesting lactose found in dairy.")
    }
    else if(message.includes("what is diabetes")){
        speak("Diabetes is a condition where blood sugar is too high. Monitor and manage with medical advice.")
    }
    else if(message.includes("how to measure blood pressure at home")){
        speak("Use an electronic BP monitor and follow the device instructions.")
    }
    else if(message.includes("what is cholesterol")){
        speak("Cholesterol is a fat-like substance in blood; balance with diet and exercise.")
    }
    else if(message.includes("what are symptoms of flu")){
        speak("Common flu symptoms are fever, cough, sore throat, and body aches.")
    }
    else if(message.includes("how to quit smoking")){
        speak("Seek professional help, nicotine replacement, and stay committed to quitting.")
    }
    else if(message.includes("what is menopause")){
        speak("Menopause is the end of menstrual cycles in women, usually around age 45-55.")
    }
    else if(message.includes("how to get scholarships")){
        speak("Search scholarship portals, prepare documents and meet application deadlines.")
    }
    else if(message.includes("how to write cover letter")){
        speak("Explain why you fit the role, highlight achievements and keep it concise.")
    }
    else if(message.includes("how to do interview preparation")){
        speak("Research company, practice common questions and prepare examples of your work.")
    }
    else if(message.includes("how to start a business")){
        speak("Start with a business idea, market research, plan, and registration as per law.")
    }
    else if(message.includes("how to get gst number")){
        speak("GST registration is online through the government portal.")
    }
    else if(message.includes("how to pay taxes")){
        speak("Use your country's tax portal or consult an accountant for details.")
    }
    else if(message.includes("how to file income tax online")){
        speak("Use the official tax portal and follow the guided steps to file returns.")
    }
    else if(message.includes("how to track parcel")){
        speak("Use the courier's tracking number on their website to track your parcel.")
    }
    else if(message.includes("what is aadhar")){
        speak("Aadhaar is a unique ID number issued by the Indian government.")
    }
    else if(message.includes("how to apply for passport")){
        speak("Apply online via the passport portal, fill the form and book an appointment.")
    }
    else if(message.includes("how to renew passport")){
        speak("Renew through your country's passport renewal process, usually online.")
    }
    else if(message.includes("check pnr status")){
        speak("PNR status can be checked at your railway website using the PNR number.")
        window.open("https://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html?locale=en","_blank")
    }
    else if(message.includes("what is gst rate")){
        speak("GST rates vary by product and service. Check official GST rate lists.")
    }
    else if(message.includes("how to check bank balance online")){
        speak("Use your bank's netbanking or mobile app to view balance.")
    }
    else if(message.includes("how to open demat account")){
        speak("Contact a broker or bank that provides demat services and fill the KYC.")
    }
    else if(message.includes("how to pay electricity bill")){
        speak("Use your electricity provider's website or payment portals.")
    }
    else if(message.includes("what is pan card")){
        speak("PAN is Permanent Account Number used for tax identification in India.")
    }
    else if(message.includes("how to recharge mobile")){
        speak("Use mobile recharge apps or your telecom provider's portal.")
    }
    else if(message.includes("how to check imei")){
        speak("Dial *#06# on your phone to see the IMEI number.")
    }
    else if(message.includes("how to transfer money online")){
        speak("Use UPI, netbanking or payment apps to transfer money.")
    }
    else if(message.includes("what is upi")){
        speak("UPI is a real-time payment system in India that allows instant transfers.")
    }
    else if(message.includes("how to block card")){
        speak("Contact your bank immediately and request to block the card.")
    }
    else if(message.includes("where to buy laptop")){
        speak("Check online marketplaces or local electronics stores for laptops.")
    }
    else if(message.includes("how to choose a laptop")){
        speak("Consider CPU, RAM, storage, battery life and budget.")
    }
    else if(message.includes("what is ssd")){
        speak("SSD is solid-state drive, faster than traditional hard disks.")
    }
    else if(message.includes("what is hdd")){
        speak("HDD is hard disk drive, mechanical storage device.")
    }
    else if(message.includes("what is ram")){
        speak("RAM is temporary memory used by your computer to run programs.")
    }
    else if(message.includes("what is gpu")){
        speak("GPU is graphics processing unit, useful for graphics and parallel tasks.")
    }
    else if(message.includes("how to install software")){
        speak("Download official installer and follow the setup instructions.")
    }
    else if(message.includes("how to uninstall software")){
        speak("Use your OS uninstall options in Control Panel or Settings.")
    }
    else if(message.includes("how to clean pc")){
        speak("Back up data, uninstall unused apps and run disk cleanup.")
    }
    else if(message.includes("how to update drivers")){
        speak("Use your device manager or manufacturer's site to update drivers.")
    }
    else if(message.includes("how to make powerpoint")){
        speak("Use Microsoft PowerPoint or Google Slides and create slides with text and images.")
    }
    else if(message.includes("how to create pdf")){
        speak("Use a 'Save as PDF' option or online converters to create a PDF.")
    }
    else if(message.includes("how to scan document with phone")){
        speak("Use your camera or scanning apps to scan and save documents as PDF.")
    }
    else if(message.includes("how to send large files")){
        speak("Use cloud services like Google Drive, Dropbox, or file transfer sites.")
    }
    else if(message.includes("what is vpn")){
        speak("A VPN encrypts your internet traffic and hides your IP address.")
    }
    else if(message.includes("how to get vpn")){
        speak("Subscribe to a reputable VPN provider and install their app.")
    }
    else if(message.includes("how to block spam calls")){
        speak("Use call blocking apps or built-in phone features to block spam callers.")
    }
    else if(message.includes("what is phishing")){
        speak("Phishing is an attempt to trick you into giving personal information.")
    }
    else if(message.includes("how to avoid phishing")){
        speak("Don't click unknown links, verify senders and use security software.")
    }
    else if(message.includes("how to check credit score")){
        speak("Check credit bureaus or bank services to view your credit score.")
    }
    else if(message.includes("what is mutual fund")){
        speak("A mutual fund pools money from many investors to invest in securities.")
    }
    else if(message.includes("how to redeem points")){
        speak("Use the rewards program's portal to redeem your points.")
    }
    else if(message.includes("how to delete browser history")){
        speak("Open browser settings and clear browsing data to delete history.")
    }
    else if(message.includes("how to change default browser")){
        speak("Change default apps in system settings and select your preferred browser.")
    }
    else if(message.includes("what is cloud storage")){
        speak("Cloud storage stores data on remote servers accessible via the internet.")
    }
    else if(message.includes("how to link phone to pc")){
        speak("Use phone companion apps or connect via USB or Bluetooth.")
    }
    else if(message.includes("how to check warranty")){
        speak("Check product serial number on manufacturer's warranty portal.")
    }
    else if(message.includes("how to claim warranty")){
        speak("Contact the seller or manufacturer with proof of purchase for warranty.")
    }
    else if(message.includes("what is two factor authentication")){
        speak("2FA adds an extra security step like an SMS code after your password.")
    }
    else if(message.includes("how to enable two factor authentication")){
        speak("Enable 2FA in the security settings of your account.")
    }
    else if(message.includes("how to report abuse online")){
        speak("Use the platform's report feature and provide evidence when possible.")
    }
    else if(message.includes("how to block user on social media")){
        speak("Open the user's profile and select block or report.")
    }
    else if(message.includes("how to change language on phone")){
        speak("Go to Settings > Language & Input and change the system language.")
    }

    // Add more commands later as needed...

    else{
        let finalText="this is what i found on internet regarding " + (message.replace("NOVAVOICE","") || message)
        speak(finalText)
        window.open("https://www.google.com/search?q=" + encodeURIComponent(message.replace("NOVAVOICE","")),"_blank")
    }
}