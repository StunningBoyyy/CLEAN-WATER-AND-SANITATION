export interface FAQItem {
  id: string;
  keywords: string[];
  suggestedPrompt: Record<string, string>;
  answer: Record<string, string>;
  relatedRoute?: string;
}

export const LOCAL_FAQ_DATA: FAQItem[] = [
  {
    id: "faq-boiled-water",
    keywords: ["boil", "boiled", "safe", "kill", "germs", "clean", "purify", "उबाल", "ਉਬਾਲ", "ابال", "ফুটানো"],
    suggestedPrompt: {
      en: "Is boiled water completely safe to drink?",
      hi: "क्या उबला हुआ पानी पूरी तरह सुरक्षित है?",
      pa: "ਕੀ ਉਬਾਲਿਆ ਪਾਣੀ ਪੂਰੀ ਤਰ੍ਹਾਂ ਸੁਰੱਖਿਅਤ ਹੈ?",
      ur: "کیا ابلا ہوا پانی پینے کے لیے مکمل طور پر محفوظ ہے؟",
      bn: "ফুটানো পানি কি পান করার জন্য সম্পূর্ণ নিরাপদ?",
    },
    answer: {
      en: "Boiling water kills biological germs (bacteria, viruses, and parasites) very effectively. However, boiling does NOT remove chemical contaminants or heavy metals like lead or arsenic. For chemical pollutants, certified filtration is required.",
      hi: "पानी को उबालने से हानिकारक बैक्टीरिया और वायरस समाप्त हो जाते हैं। लेकिन उबालने से सीसा, आर्सेनिक या रसायनों जैसे तत्व नहीं हटते। रासायनिक अशुद्धियों के लिए उपयुक्त फिल्टर का उपयोग करना जरूरी है।",
      pa: "ਪਾਣੀ ਉਬਾਲਣ ਨਾਲ ਬੈਕਟੀਰੀਆ ਅਤੇ ਵਾਇਰਸ ਖਤਮ ਹੋ ਜਾਂਦੇ ਹਨ। ਪਰ ਇਹ ਸੀਸਾ ਜਾਂ ਆਰਸੈਨਿਕ ਵਰਗੇ ਰਸਾਇਣਕ ਤੱਤਾਂ ਨੂੰ ਦੂਰ ਨਹੀਂ ਕਰਦਾ। ਉਸ ਲਈ ਫਿਲਟਰ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ।",
      ur: "پانی کو ابالنے سے جراثیم اور وائرس ختم ہو جاتے ہیں، لیکن یہ سیسہ، سنکھیا یا کیمیکلز کو دور نہیں کرتا۔ کیمیائی آلودگی کے لیے فلٹریشن کا استعمال کریں۔",
      bn: "পানি ফুটালে ক্ষতিকর ব্যাকটেরিয়া ও ভাইরাস ধ্বংস হয়। তবে এটি সীসা বা আর্সেনিকের মতো রাসায়নিক উপাদান দূর করতে পারে না। রাসায়নিক দূষণ দূর করতে উপযুক্ত ফিল্টার প্রয়োজন।",
    },
    relatedRoute: "/the-issue",
  },
  {
    id: "faq-handwashing",
    keywords: ["handwash", "soap", "hands", "steps", "wash", "हाथ", "ਹੱਥ", "ہاتھ", "হাত"],
    suggestedPrompt: {
      en: "How do I wash hands properly?",
      hi: "हाथ धोने का सही तरीका क्या है?",
      pa: "ਹੱਥ ਧੋਣ ਦਾ ਸਹੀ ਤਰੀਕਾ ਕੀ ਹੈ?",
      ur: "ہاتھ دھونے کا صحیح طریقہ کیا ہے؟",
      bn: "সঠিকভাবে হাত ধোয়ার উপায় কী?",
    },
    answer: {
      en: "Follow the WHO 6-step technique: wet hands, apply soap, scrub palm-to-palm, back of hands, thumbs, and fingertips for 20 to 30 seconds, then rinse with clean water and dry with a clean towel.",
      hi: "WHO के 6 चरणों का पालन करें: हाथों को गीला करें, साबुन लगाएं, हथेलियों, हाथों के पीछे, अंगूठे और उंगलियों के पोरों को 20 से 30 सेकंड तक रगड़ें, फिर साफ पानी से धोकर सुखाएं।",
      pa: "WHO ਦੇ 6 ਕਦਮਾਂ ਦੀ ਪਾਲਣਾ ਕਰੋ: ਹੱਥ ਗਿੱਲੇ ਕਰੋ, ਸਾਬਣ ਲਗਾਓ, ਹਥੇਲੀਆਂ, ਹੱਥਾਂ ਦੇ ਪਿੱਛੇ ਅਤੇ ਉਂਗਲਾਂ ਨੂੰ 20-30 ਸਕਿੰਟਾਂ ਤੱਕ ਰਗੜੋ, ਫਿਰ ਸਾਫ਼ ਪਾਣੀ ਨਾਲ ਧੋਵੋ।",
      ur: "ڈبلیو ایچ او کے 6 مراحل پر عمل کریں: ہاتھ گیلے کریں، صابن لگائیں، ہتھیلیوں، انگلیوں اور انگوٹھوں کو 20 سے 30 سیکنਡ تک رگڑیں، پھر صاف پانی سے دھو کر خشک کریں۔",
      bn: "WHO-এর ৬টি ধাপ অনুসরণ করুন: হাত ভিজিয়ে সাবান লাগান, হাতের তালু, পিছনভাগ, বৃদ্ধাঙ্গুলি ও নখের ডগা ২০-৩০ সেকেন্ড ঘষুন, তারপর পরিষ্কার পানিতে ধুয়ে শুকিয়ে নিন।",
    },
    relatedRoute: "/solutions",
  },
  {
    id: "faq-today-action",
    keywords: ["action", "today", "help", "do", "save", "कदम", "ਕਦਮ", "اقدام", "পদক্ষেপ"],
    suggestedPrompt: {
      en: "What can I do today for clean water?",
      hi: "स्वच्छ जल के लिए मैं आज क्या कर सकता हूँ?",
      pa: "ਸਾਫ਼ ਪਾਣੀ ਲਈ ਮੈਂ ਅੱਜ ਕੀ ਕਰ ਸਕਦਾ ਹਾਂ?",
      ur: "صاف پانی کے لیے میں آج کیا کر سکتا ہوں؟",
      bn: "পরিষ্কার পানির জন্য আমি আজ কী করতে পারি?",
    },
    answer: {
      en: "You can start immediately by turning off the tap while brushing, fixing household leaks, washing hands with soap, keeping drinking water containers covered, and calculating your personal water footprint on our Take Action page.",
      hi: "आप तुरंत शुरुआत कर सकते हैं: ब्रश करते समय नल बंद रखें, लीकेज ठीक करें, साबुन से हाथ धोएं, पीने के पानी को ढक कर रखें, और हमारे 'टेक एक्शन' पेज पर अपना वाटर फुटप्रिंट जांचें।",
      pa: "ਤੁਸੀਂ ਤੁਰੰਤ ਸ਼ੁਰੂ ਕਰ ਸਕਦੇ ਹੋ: ਬੁਰਸ਼ ਕਰਦੇ ਸਮੇਂ ਟੂਟੀ ਬੰਦ ਰੱਖੋ, ਲੀਕੇਜ ਠੀਕ ਕਰੋ, ਸਾਬਣ ਨਾਲ ਹੱਥ ਧੋਵੋ, ਅਤੇ ਆਪਣੇ ਪਾਣੀ ਦੇ ਉਪਯੋਗ ਦਾ ਹਿਸਾਬ ਲਗਾਓ।",
      ur: "آپ فوری طور پر آغاز کر سکتے ہیں: دانت صاف کرتے وقت نل بند رکھیں، لیکیج درست کریں، صابن سے ہاتھ دھوئیں، اور پانی کے استعمال کا حساب لگائیں۔",
      bn: "আপনি এখনই শুরু করতে পারেন: দাঁত মাজার সময় কল বন্ধ রাখুন, লিকেজ মেরামত করুন, সাবান দিয়ে হাত ধুয়ে নিন এবং আমাদের টেক অ্যাকশন পেজে আপনার পানির ব্যবহার হিসাব করুন।",
    },
    relatedRoute: "/take-action",
  },
  {
    id: "faq-global-facts",
    keywords: ["stats", "billion", "people", "facts", "crisis", "data", "आंकड़े", "ਅੰਕੜੇ", "حقائق", "তথ্য"],
    suggestedPrompt: {
      en: "How many people lack safe water globally?",
      hi: "दुनिया भर में कितने लोगों के पास सुरक्षित पानी नहीं है?",
      pa: "ਦੁਨੀਆ ਭਰ ਵਿੱਚ ਕਿੰਨੇ ਲੋਕਾਂ ਕੋਲ ਸੁਰੱਖਿਅਤ ਪਾਣੀ ਨਹੀਂ ਹੈ?",
      ur: "دنیا بھر میں کتنے لوگوں کو محفوظ پانی میسر نہیں؟",
      bn: "বিশ্বজুড়ে কত মানুষের নিরাপদ পানির অভাব রয়েছে?",
    },
    answer: {
      en: "According to the 2025 WHO/UNICEF JMP report, 2.1 billion people (about 1 in 4 globally) lack safely managed drinking water, 3.4 billion lack safe sanitation, and 1.7 billion lack basic hygiene at home.",
      hi: "2025 की WHO/UNICEF JMP रिपोर्ट के अनुसार, 2.1 अरब लोगों के पास सुरक्षित पीने का पानी नहीं है, 3.4 अरब लोगों के पास सुरक्षित स्वच्छता नहीं है, और 1.7 अरब लोगों के पास घर पर बुनियादी स्वच्छता सुविधाएं नहीं हैं।",
      pa: "2025 ਦੀ WHO/UNICEF JMP ਰਿਪੋਰਟ ਅਨੁਸਾਰ, 2.1 ਅਰਬ ਲੋਕਾਂ ਕੋਲ ਸੁਰੱਖਿਅਤ ਪੀਣ ਵਾਲਾ ਪਾਣੀ ਨਹੀਂ ਹੈ ਅਤੇ 3.4 ਅਰਬ ਲੋਕਾਂ ਕੋਲ ਸੁਰੱਖਿਅਤ ਸੈਨੀਟੇਸ਼ਨ ਨਹੀਂ ਹੈ।",
      ur: "ڈبلیو ایچ او اور یونیسیف کی 2025 رپورٹ کے مطابق، 2.1 ارب افراد پینے کے محفوظ پانی سے محروم ہیں اور 3.4 ارب افراد محفوظ سینیٹیشن سے محروم ہیں۔",
      bn: "২০২৫ সালের WHO/UNICEF JMP রিপোর্ট অনুযায়ী, বিশ্বে ২.১ বিলিয়ন মানুষ নিরাপদ খাবার পানির অভাবে রয়েছে এবং ৩.৪ বিলিয়ন মানুষ নিরাপদ স্যানিটেশন থেকে বঞ্চিত।",
    },
    relatedRoute: "/the-issue",
  },
  {
    id: "faq-founders",
    keywords: ["founders", "creator", "vishwa", "prateek", "who made", "संस्थापक", "ਸੰਸਥਾਪਕ", "بانی", "প্রতিষ্ঠাতা"],
    suggestedPrompt: {
      en: "Who founded this website?",
      hi: "इस वेबसाइट की स्थापना किसने की?",
      pa: "ਇਸ ਵੈੱਬਸਾਈਟ ਦੀ ਸਥਾਪਨਾ ਕਿਸ ਨੇ ਕੀਤੀ?",
      ur: "اس ویب سائٹ کو کس نے قائم کیا؟",
      bn: "এই ওয়েবসাইটটি কে প্রতিষ্ঠা করেছেন?",
    },
    answer: {
      en: "This public-awareness project was founded and engineered by Vishwa Vijay and Prateek Saroj, focusing on Design, User Research, and Web Engineering to advance UN SDG 6.",
      hi: "इस जन-जागरूकता परियोजना की स्थापना और निर्माण विश्व विजय (Vishwa Vijay) और प्रतीक सरोज (Prateek Saroj) द्वारा संयुक्त राष्ट्र SDG 6 को बढ़ावा देने के लिए किया गया है।",
      pa: "ਇਸ ਪ੍ਰੋਜੈਕਟ ਦੀ ਸਥਾਪਨਾ ਵਿਸ਼ਵ ਵਿਜੇ (Vishwa Vijay) ਅਤੇ ਪ੍ਰਤੀਕ ਸਰੋਜ (Prateek Saroj) ਦੁਆਰਾ ਸੰਯੁਕਤ ਰਾਸ਼ਟਰ SDG 6 ਨੂੰ ਅੱਗੇ ਵਧਾਉਣ ਲਈ ਕੀਤੀ ਗਈ ਹੈ।",
      ur: "اس آگاہی پروجیکٹ کو وشوا وجے (Vishwa Vijay) اور پرتیک سروج (Prateek Saroj) نے اقوام متحدہ کے SDG 6 کو فروغ دینے کے لیے قائم اور تیار کیا ہے۔",
      bn: "এই প্রকল্পটি বিশ্ব বিজয় (Vishwa Vijay) এবং প্রতীক সরোজ (Prateek Saroj) দ্বারা প্রতিষ্ঠিত ও নির্মিত হয়েছে যা জাতিসংঘ SDG 6 সচেতনতা বৃদ্ধিতে নিবেদিত।",
    },
    relatedRoute: "/about",
  },
];

/**
 * Matches a user query against the local FAQ database using keyword frequency scoring.
 */
export function matchLocalFAQ(
  query: string,
  locale: string = "en"
): { answer: string; relatedRoute?: string } | null {
  const normalized = query.toLowerCase().trim();
  if (!normalized) return null;

  let bestMatch: FAQItem | null = null;
  let highestScore = 0;

  for (const item of LOCAL_FAQ_DATA) {
    let score = 0;
    for (const kw of item.keywords) {
      if (normalized.includes(kw.toLowerCase())) {
        score += 1;
      }
    }
    if (score > highestScore) {
      highestScore = score;
      bestMatch = item;
    }
  }

  if (bestMatch && highestScore > 0) {
    const answer = bestMatch.answer[locale] || bestMatch.answer["en"];
    return {
      answer,
      relatedRoute: bestMatch.relatedRoute,
    };
  }

  // Generic helpful response
  const genericFallback: Record<string, string> = {
    en: "Clean drinking water and safe sanitation are vital human rights. You can explore verified WHO/UNICEF data on our Issue page, calculate your household footprint on our Take Action page, or contact founders Vishwa Vijay and Prateek Saroj.",
    hi: "स्वच्छ पेयजल और सुरक्षित स्वच्छता बुनियादी मानव अधिकार हैं। आप हमारे 'द इश्यू' पेज पर सत्यापित आंकड़े देख सकते हैं, 'टेक एक्शन' पर वाटर फुटप्रिंट की गणना कर सकते हैं, या संपर्क कर सकते हैं।",
    pa: "ਸਾਫ਼ ਪਾਣੀ ਅਤੇ ਸੁਰੱਖਿਅਤ ਸੈਨੀਟੇਸ਼ਨ ਜ਼ਰੂਰੀ ਮਨੁੱਖੀ ਅਧਿਕਾਰ ਹਨ। ਤੁਸੀਂ ਸਾਡੇ ਪੰਨਿਆਂ 'ਤੇ ਅੰਕੜੇ ਦੇਖ ਸਕਦੇ ਹੋ ਅਤੇ ਆਪਣੇ ਪਾਣੀ ਦੇ ਉਪਯੋਗ ਦਾ ਹਿਸਾਬ ਲਗਾ ਸਕਦੇ ਹੋ।",
    ur: "صاف پانی اور محفوظ سینیٹیشن بنیادی انسانی حقوق ہیں۔ آپ ہمارے پیجز پر حقائق دیکھ سکتے ہیں یا ایکشن لے سکتے ہیں۔",
    bn: "পরিষ্কার খাবার পানি ও নিরাপদ স্যানিটেশন মৌলিক মানবাধিকার। আপনি আমাদের ওয়েবসাইটে যাচাইকৃত তথ্য দেখতে পারেন এবং টেক অ্যাকশন পেজে আপনার পানির ব্যবহার হিসাব করতে পারেন।",
  };

  return {
    answer: genericFallback[locale] || genericFallback["en"],
    relatedRoute: "/the-issue",
  };
}
