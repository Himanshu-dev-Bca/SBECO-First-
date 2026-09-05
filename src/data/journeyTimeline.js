export const JOURNEY_MILESTONES = [
  {
    year: '1985',
    title: 'General Supply Company Founded',
    desc: 'Started as a general supply company—a one-man operation with minimum capital.',
  },
  {
    year: '1990',
    title: 'Permanent Place of Business',
    desc: 'Expanded to 7 employees; established a permanent place of business with sufficient stock in packaging and tape-related products.',
  },
  {
    year: '1992',
    title: 'tesa & Waterproof Corporation Dealership',
    desc: 'Breakthrough with tesa dealership and Waterproof Corporation dealership.',
  },
  {
    year: '1994',
    title: 'Steel Straps & Packaging Products',
    desc: 'Initiated sales of steel straps and related packaging products.',
  },
  {
    year: '1995',
    title: 'Specialized Packaging Types',
    desc: 'Increased availability of specialized packaging types offered by only a few suppliers.',
  },
  {
    year: '1997',
    title: 'Major Corporate & PSU Contracts',
    desc: 'Secured major corporate orders, high sales volumes, and central contracts with major PSUs (including BEML and HAL).',
  },
  {
    year: '1998',
    title: 'Defense R&D Support',
    desc: 'Became a key supporter of defense research and development organizations involved in Indian nuclear testing.',
  },
  {
    year: '1999',
    title: 'BEL High-Temperature Tape Orders',
    desc: 'Secured major orders from BEL for high-temperature tape applications (a product available from very few suppliers nationwide).',
  },
  {
    year: '2000',
    title: 'Stretch Film & PET Strap Introduction',
    desc: 'Achieved key milestones; introduced products like stretch film and PET strap at economical rates.',
  },
  {
    year: '2001',
    title: 'Signode 5-Year Dealership',
    desc: 'Secured a 5-year dealership with Signode products.',
  },
  {
    year: '2005',
    title: 'Kaymo Brand Partnership',
    desc: 'Added Kaymo Brand products to the portfolio and established a key partnership.',
  },
  {
    year: '2006',
    title: 'Anti-Rust Packaging Products',
    desc: 'Introduced anti-rust packaging products.',
  },
  {
    year: '2007',
    title: 'Interpack Trade Fair Participation',
    desc: 'Participated in major global trade fairs, including Interpack.',
  },
  {
    year: '2008',
    title: 'Authorized Importer & Exporter',
    desc: 'Officially recognized as an authorized Importer and Exporter.',
  },
  {
    year: '2009',
    title: 'Excellence Awards',
    desc: 'Received Excellence Awards from multiple organizations for outstanding performance.',
  },
  {
    year: '2011',
    title: 'USA & Germany Strapping Tools',
    desc: 'Began importing strapping tools directly from the USA and Germany.',
  },
  {
    year: '2013',
    title: 'Exclusive Flipkart Tape Dispenser Supplier',
    desc: 'Became an exclusive supplier of tape dispensers to Flipkart.',
  },
  {
    year: '2015',
    title: 'Single Supplier for Tape Dispensers',
    desc: 'Became the single supplier for tape dispensers, replacing brands like 3M.',
  },
  {
    year: '2017',
    title: 'Highest Tape Sales & Brand Partnerships',
    desc: 'Achieved highest grossing tape sales; won major awards; established brand partnerships with Fromm Strapping Systems, Bosch, and others.',
  },
  {
    year: '2018',
    title: 'Digital Marketing & E-Commerce Launch',
    desc: 'Launched digital marketing initiatives, e-commerce sales channels, and related digital programs.',
  },
  {
    year: '2019',
    title: 'Middle East Exports & New Business Units',
    desc: 'Initiated exports to Middle East countries and established new business units.',
  },
  {
    year: '2020',
    title: 'Essential Supplier During COVID-19',
    desc: 'Recognized as an essential supplier; remained fully operational throughout COVID-19 to fulfill critical packaging needs across industries.',
  },
  {
    year: '2022',
    title: 'Bosch Recognition for Sales Performance',
    desc: 'Received Bosch recognition for high sales performance in the exterior projects category.',
  },
  {
    year: '2023',
    title: '14 Years as E-Commerce Exclusive Supplier',
    desc: 'Completed 14 consecutive years as an exclusive tape and dispenser supplier to e-commerce giants.',
  },
  {
    year: '2024',
    title: 'New Production & Conversion Lines',
    desc: 'Launched new production and conversion lines; added advanced tape machinery for conversion.',
  },
  {
    year: '2025',
    title: 'Facility Upgrades for Quality Audits',
    desc: 'Upgraded facilities to meet strict customer access and quality audit standards.',
  },
];

export const JOURNEY_RANGES = [
  { slug: '1985-1990', label: '1985 – 1990', start: 1985, end: 1990 },
  { slug: '1990-1995', label: '1990 – 1995', start: 1990, end: 1995 },
  { slug: '1995-2000', label: '1995 – 2000', start: 1995, end: 2000 },
  { slug: '2000-2005', label: '2000 – 2005', start: 2000, end: 2005 },
  { slug: '2005-2010', label: '2005 – 2010', start: 2005, end: 2010 },
  { slug: '2010-2015', label: '2010 – 2015', start: 2010, end: 2015 },
  { slug: '2015-2020', label: '2015 – 2020', start: 2015, end: 2020 },
  { slug: '2020-2025', label: '2020 – 2025', start: 2020, end: 2025 },
];

export function getMilestonesForRange(range) {
  return JOURNEY_MILESTONES.filter(m => {
    const y = parseInt(m.year, 10);
    return y >= range.start && y <= range.end;
  });
}

export function getRangeBySlug(slug) {
  return JOURNEY_RANGES.find(r => r.slug === slug);
}

export function getRangePreview(range) {
  const milestones = getMilestonesForRange(range);
  if (milestones.length === 0) return { title: range.label, desc: '' };
  return { title: milestones[0].title, desc: milestones[0].desc };
}
