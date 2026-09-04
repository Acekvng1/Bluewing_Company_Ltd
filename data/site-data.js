/* Public, editable content only. Replace placeholders when approved company information is available. */
window.siteData = {
  company: {
    name: 'BlueWing Company Limited',
    phone: '[PHONE TO BE PROVIDED]',
    email: '[EMAIL TO BE PROVIDED]',
    address: '[COMPANY ADDRESS TO BE PROVIDED]',
    whatsapp: ''
  },
  social: { facebook: '', instagram: '', linkedin: '' },
  subsidiaries: [
    { name: 'BlueWing Farms', type: 'Agriculture', description: 'A home for crops, poultry, fish farming and livestock.', image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=900&q=82', href: 'farms/index.html', accent: 'farm' },
    { name: 'BlueWing Restaurant', type: 'Hospitality', description: 'A welcoming food experience, from everyday meals to special occasions.', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=82', href: 'restaurant/index.html', accent: 'restaurant' },
    { name: 'Ship Chandler', type: 'Supply & service', description: 'A future-facing division for dependable marine supply solutions.', image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=900&q=82', href: 'ship-chandler/index.html', accent: 'marine' },
    { name: 'BlueWing Productions', type: 'Production', description: 'Creating room for practical ideas, products and partnerships.', image: 'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=900&q=82', href: 'production/index.html', accent: 'production' }
  ],
  farmCatalog: [
    { name: 'Vegetable farm', type: 'Vegetable crops', description: 'Tomatoes, peppers and other seasonal vegetables for households, restaurants and trade inquiries.', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=900&q=82', href: 'poultry.html' },
    { name: 'Corn farm', type: 'Staple crops', description: 'Corn grown as part of a practical crop portfolio for food and agricultural supply needs.', image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=900&q=82', href: 'crop-farm.html' },
    { name: 'Cassava farm', type: 'Staple crops', description: 'Cassava for food, processing and future value-added agricultural opportunities.', image: 'https://images.unsplash.com/photo-1595841821610-abe4f7c7be3c?auto=format&fit=crop&w=900&q=82', href: 'crop-farm.html' },
    { name: 'Plantain farm', type: 'Fruit crops', description: 'Plantain for local food markets, hospitality supply and household use.', image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=900&q=82', href: 'crop-farm.html' },
    { name: 'Banana farm', type: 'Fruit crops', description: 'Bananas forming part of a diverse and adaptable fruit-growing catalogue.', image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=900&q=82', href: 'crop-farm.html' },
    { name: 'Pineapple farm', type: 'Fruit crops', description: 'Pineapples for fresh produce inquiries and future processing opportunities.', image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=900&q=82', href: 'crop-farm.html' },
    { name: 'Poultry farm', type: 'Poultry', description: 'A poultry operation supporting eggs, birds and related chicken product supply.', image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=900&q=82', href: 'poultry.html' },
    { name: 'Tilapia fish farm', type: 'Aquaculture', description: 'Tilapia farming for fresh fish supply, household cooking, restaurants and trade inquiries.', image: 'https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?auto=format&fit=crop&w=900&q=82', href: 'fish-farm.html' },
    { name: 'Cattle farm', type: 'Livestock', description: 'Cattle farming within a growing livestock programme and meat supply network.', image: 'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=900&q=82', href: 'livestock.html' },
    { name: 'Goat farm', type: 'Livestock', description: 'Goat farming for responsible livestock development and future market supply.', image: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=900&q=82', href: 'livestock.html' }
  ],
  featuredProducts: [
    { name: 'Fresh eggs', category: 'Poultry', image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=700&q=82' },
    { name: 'Chicken portions', category: 'BlueWing Productions', image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=700&q=82' },
    { name: 'Brown sugar', category: 'BlueWing Productions', image: 'https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&w=700&q=82' },
    { name: 'Liquid soap', category: 'BlueWing Productions', image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=700&q=82' }
  ],
  products: [
    { name: 'Beef cuts', category: 'Meat products', description: 'Portioned beef prepared for household, hospitality and trade inquiries.', format: 'Fresh or frozen portions', image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&w=700&q=82' },
    { name: 'Chicken thighs', category: 'Poultry products', description: 'Versatile chicken thigh portions for kitchens, caterers and food service.', format: 'Bulk packs available', image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=700&q=82' },
    { name: 'Chicken wings', category: 'Poultry products', description: 'Chicken wings suited to restaurants, events and everyday cooking.', format: 'Trade quantities available', image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=700&q=82' },
    { name: 'Chicken backs', category: 'Poultry products', description: 'Chicken backs for stocks, soups, stews and food preparation.', format: 'Pack size on inquiry', image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=700&q=82' },
    { name: 'Chicken drumsticks', category: 'Poultry products', description: 'Family-friendly drumsticks for retail, catering and food service.', format: 'Bulk packs available', image: 'https://images.unsplash.com/photo-1603073163308-9654c3fb70b5?auto=format&fit=crop&w=700&q=82' },
    { name: 'Chicken gizzard', category: 'Poultry products', description: 'Prepared chicken gizzard for local dishes, restaurants and wholesale supply.', format: 'Pack size on inquiry', image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=700&q=82' },
    { name: 'Washing powder', category: 'Home care', description: 'A practical cleaning powder for everyday laundry care.', format: 'Retail and bulk formats', image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=700&q=82' },
    { name: 'Liquid soap', category: 'Home care', description: 'Liquid cleaning soap for household and institutional use.', format: 'Bottle and bulk formats', image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=700&q=82' },
    { name: 'Brown sugar', category: 'Food products', description: 'Brown sugar for households, bakeries, restaurants and food service.', format: 'Pack sizes on inquiry', image: 'https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&w=700&q=82' },
    { name: 'Fresh eggs', category: 'Poultry products', description: 'Eggs supplied for households, food service and trade inquiries.', format: 'Tray and bulk formats', image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=700&q=82' }
  ]
};
