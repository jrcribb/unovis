export type Datum = {
  type: 'Aromas' | 'Tastes';
  group: string;
  subgroup: string;
  description: string;
  item?: string;
}

export const colors = new Map([
  ['Aromas', '#aaa'],
  ['Enzymatic', 'rgb(241, 235, 161)'],
  ['Flowery', 'rgb(241, 235, 161)'],
  ['Floral', 'rgb(241, 235, 161)'],
  ['Coffee Blossom', '#f9f0ab'],
  ['Tea Rose', '#e8e596'],
  ['Fragrant', 'rgb(239, 227, 149)'],
  ['Cardamon Caraway', '#f0e2a3'],
  ['Coriander Seeds', '#ede487'],
  ['Fruity', 'rgb(240, 208, 129)'],
  ['Citrus', 'rgb(240, 208, 129)'],
  ['Lemon', '#efd580'],
  ['Apple', '#f1cb82'],
  ['Berry-like', 'rgb(237, 188, 152)'],
  ['Apricot', '#f1c298'],
  ['Blackberry', '#e8b598'],
  ['Herby', 'rgb(207, 216, 171)'],
  ['Alliaceous', 'rgb(207, 216, 171)'],
  ['Onion', '#d5dda1'],
  ['Garlic', '#c9d2b5'],
  ['Leguminous', 'rgb(171, 189, 171)'],
  ['Cucumber', '#aec1ad'],
  ['Garden Peas', '#a7b8a8'],
  ['Sugar Browning', 'rgb(179, 144, 66)'],
  ['Nutty', 'rgb(179, 144, 66)'],
  ['Nut-like', 'rgb(179, 144, 66)'],
  ['Roasted Peanuts', '#b49a3d'],
  ['Walnuts', '#b28647'],
  ['Malt-like', 'rgb(176, 128, 51)'],
  ['Balsamic Rice', '#a97d32'],
  ['Toast', '#b68334'],
  ['Carmelly', 'rgb(219, 170, 120)'],
  ['Candy-like', 'rgb(219, 170, 120)'],
  ['Roasted Hazelnut', '#d6a680'],
  ['Roasted Almond', '#dfad70'],
  ['Syrup-like', 'rgb(161, 110, 88)'],
  ['Honey', '#a2765d'],
  ['Maple Syrup', '#9f6652'],
  ['Chocolatey', 'rgb(188, 114, 78)'],
  ['Chocolate-like', 'rgb(188, 114, 78)'],
  ['Bakers', '#b9763f'],
  ['Dark Chocolate', '#bf6e5d'],
  ['Vanilla-like', 'rgb(165, 88, 62)'],
  ['Swiss', '#af643c'],
  ['Butter', '#9b4c3f'],
  ['Dry Distillation', 'rgb(126, 106, 158)'],
  ['Resinous', 'rgb(126, 106, 158)'],
  ['Turpeny', 'rgb(126, 106, 158)'],
  ['Piney', '#72659d'],
  ['Blackcurrant', '#8a6e9e'],
  ['Medicinal', 'rgb(145, 84, 136)'],
  ['Camphoric', '#8f5c85'],
  ['Cineolic', '#934b8b'],
  ['Spicy', 'rgb(152, 81, 138)'],
  ['Warming', 'rgb(152, 81, 138)'],
  ['Cedar', '#9d4e87'],
  ['Pepper', '#92538c'],
  ['Pungent', 'rgb(126, 98, 142)'],
  ['Clove', '#8b6397'],
  ['Thyme', '#716084'],
  ['Carbony', 'rgb(52, 93, 142)'],
  ['Smokey', 'rgb(52, 93, 142)'],
  ['Tarry', '#2e6093'],
  ['Pipe Tobacco', '#3a5988'],
  ['Ashy', 'rgb(66, 71, 107)'],
  ['Burnt', '#4a5072'],
  ['Charred', '#393e64'],
  ['Tastes', '#ccc'],
  ['Bitter', 'rgb(197, 171, 203)'],
  ['Creosol', '#aaa1cc'],
  ['Phenolic', '#e0b5c9'],
  ['Harsh', 'rgb(231, 141, 169)'],
  ['Caustic', '#e098b0'],
  ['Alkaline', '#ee82a2'],
  ['Salt', 'rgb(238, 157, 160)'],
  ['Sharp', 'rgb(238, 157, 160)'],
  ['Astringent', '#ef91ac'],
  ['Rough', '#eda994'],
  ['Bland', 'rgb(237, 188, 153)'],
  ['Neutral', '#eeb798'],
  ['Soft', '#ecc099'],
  ['Sweet', 'rgb(243, 213, 154)'],
  ['Mellow', 'rgb(243, 213, 154)'],
  ['Delicate', '#f6d5aa'],
  ['Mild', '#f0d48a'],
  ['Acidy', 'rgb(239, 223, 100)'],
  ['Nippy', '#efd95f'],
  ['Piquant', '#eee469'],
  ['Sour', 'rgb(221, 219, 112)'],
  ['Winey', 'rgb(221, 219, 112)'],
  ['Tangy', '#dbdc7f'],
  ['Tart', '#dfd961'],
  ['Soury', 'rgb(240, 227, 101)'],
  ['Hard', '#ebe378'],
  ['Acrid', '#f5e351'],
])

export const data = [
  {
    type: 'Aromas',
    group: 'Enzymatic',
    subgroup: 'Flowery',
    description: 'Floral',
    item: 'Coffee Blossom',
  },
  {
    type: 'Aromas',
    group: 'Enzymatic',
    subgroup: 'Flowery',
    description: 'Floral',
    item: 'Tea Rose',
  },
  {
    type: 'Aromas',
    group: 'Enzymatic',
    subgroup: 'Flowery',
    description: 'Fragrant',
    item: 'Cardamon Caraway',
  },
  {
    type: 'Aromas',
    group: 'Enzymatic',
    subgroup: 'Flowery',
    description: 'Fragrant',
    item: 'Coriander Seeds',
  },
  {
    type: 'Aromas',
    group: 'Enzymatic',
    subgroup: 'Fruity',
    description: 'Citrus',
    item: 'Lemon',
  },
  {
    type: 'Aromas',
    group: 'Enzymatic',
    subgroup: 'Fruity',
    description: 'Citrus',
    item: 'Apple',
  },
  {
    type: 'Aromas',
    group: 'Enzymatic',
    subgroup: 'Fruity',
    description: 'Berry-like',
    item: 'Apricot',
  },
  {
    type: 'Aromas',
    group: 'Enzymatic',
    subgroup: 'Fruity',
    description: 'Berry-like',
    item: 'Blackberry',
  },
  {
    type: 'Aromas',
    group: 'Enzymatic',
    subgroup: 'Herby',
    description: 'Alliaceous',
    item: 'Onion',
  },
  {
    type: 'Aromas',
    group: 'Enzymatic',
    subgroup: 'Herby',
    description: 'Alliaceous',
    item: 'Garlic',
  },
  {
    type: 'Aromas',
    group: 'Enzymatic',
    subgroup: 'Herby',
    description: 'Leguminous',
    item: 'Cucumber',
  },
  {
    type: 'Aromas',
    group: 'Enzymatic',
    subgroup: 'Herby',
    description: 'Leguminous',
    item: 'Garden Peas',
  },
  {
    type: 'Aromas',
    group: 'Sugar Browning',
    subgroup: 'Nutty',
    description: 'Nut-like',
    item: 'Roasted Peanuts',
  },
  {
    type: 'Aromas',
    group: 'Sugar Browning',
    subgroup: 'Nutty',
    description: 'Nut-like',
    item: 'Walnuts',
  },
  {
    type: 'Aromas',
    group: 'Sugar Browning',
    subgroup: 'Nutty',
    description: 'Malt-like',
    item: 'Balsamic Rice',
  },
  {
    type: 'Aromas',
    group: 'Sugar Browning',
    subgroup: 'Nutty',
    description: 'Malt-like',
    item: 'Toast',
  },
  {
    type: 'Aromas',
    group: 'Sugar Browning',
    subgroup: 'Carmelly',
    description: 'Candy-like',
    item: 'Roasted Hazelnut',
  },
  {
    type: 'Aromas',
    group: 'Sugar Browning',
    subgroup: 'Carmelly',
    description: 'Candy-like',
    item: 'Roasted Almond',
  },
  {
    type: 'Aromas',
    group: 'Sugar Browning',
    subgroup: 'Carmelly',
    description: 'Syrup-like',
    item: 'Honey',
  },
  {
    type: 'Aromas',
    group: 'Sugar Browning',
    subgroup: 'Carmelly',
    description: 'Syrup-like',
    item: 'Maple Syrup',
  },
  {
    type: 'Aromas',
    group: 'Sugar Browning',
    subgroup: 'Chocolatey',
    description: 'Chocolate-like',
    item: 'Bakers',
  },
  {
    type: 'Aromas',
    group: 'Sugar Browning',
    subgroup: 'Chocolatey',
    description: 'Chocolate-like',
    item: 'Dark Chocolate',
  },
  {
    type: 'Aromas',
    group: 'Sugar Browning',
    subgroup: 'Chocolatey',
    description: 'Vanilla-like',
    item: 'Swiss',
  },
  {
    type: 'Aromas',
    group: 'Sugar Browning',
    subgroup: 'Chocolatey',
    description: 'Vanilla-like',
    item: 'Butter',
  },
  {
    type: 'Aromas',
    group: 'Dry Distillation',
    subgroup: 'Resinous',
    description: 'Turpeny',
    item: 'Piney',
  },
  {
    type: 'Aromas',
    group: 'Dry Distillation',
    subgroup: 'Resinous',
    description: 'Turpeny',
    item: 'Blackcurrant',
  },
  {
    type: 'Aromas',
    group: 'Dry Distillation',
    subgroup: 'Resinous',
    description: 'Medicinal',
    item: 'Camphoric',
  },
  {
    type: 'Aromas',
    group: 'Dry Distillation',
    subgroup: 'Resinous',
    description: 'Medicinal',
    item: 'Cineolic',
  },
  {
    type: 'Aromas',
    group: 'Dry Distillation',
    subgroup: 'Spicy',
    description: 'Warming',
    item: 'Cedar',
  },
  {
    type: 'Aromas',
    group: 'Dry Distillation',
    subgroup: 'Spicy',
    description: 'Warming',
    item: 'Pepper',
  },
  {
    type: 'Aromas',
    group: 'Dry Distillation',
    subgroup: 'Spicy',
    description: 'Pungent',
    item: 'Clove',
  },
  {
    type: 'Aromas',
    group: 'Dry Distillation',
    subgroup: 'Spicy',
    description: 'Pungent',
    item: 'Thyme',
  },
  {
    type: 'Aromas',
    group: 'Dry Distillation',
    subgroup: 'Carbony',
    description: 'Smokey',
    item: 'Tarry',
  },
  {
    type: 'Aromas',
    group: 'Dry Distillation',
    subgroup: 'Carbony',
    description: 'Smokey',
    item: 'Pipe Tobacco',
  },
  {
    type: 'Aromas',
    group: 'Dry Distillation',
    subgroup: 'Carbony',
    description: 'Ashy',
    item: 'Burnt',
  },
  {
    type: 'Aromas',
    group: 'Dry Distillation',
    subgroup: 'Carbony',
    description: 'Ashy',
    item: 'Charred',
  },
  {
    type: 'Tastes',
    group: 'Bitter',
    subgroup: 'Pungent',
    description: 'Creosol',
  },
  {
    type: 'Tastes',
    group: 'Bitter',
    subgroup: 'Pungent',
    description: 'Phenolic',
  },
  {
    type: 'Tastes',
    group: 'Bitter',
    subgroup: 'Harsh',
    description: 'Caustic',
  },
  {
    type: 'Tastes',
    group: 'Bitter',
    subgroup: 'Harsh',
    description: 'Alkaline',
  },
  {
    type: 'Tastes',
    group: 'Salt',
    subgroup: 'Sharp',
    description: 'Astringent',
  },
  {
    type: 'Tastes',
    group: 'Salt',
    subgroup: 'Sharp',
    description: 'Rough',
  },
  {
    type: 'Tastes',
    group: 'Salt',
    subgroup: 'Bland',
    description: 'Neutral',
  },
  {
    type: 'Tastes',
    group: 'Salt',
    subgroup: 'Bland',
    description: 'Soft',
  },
  {
    type: 'Tastes',
    group: 'Sweet',
    subgroup: 'Mellow',
    description: 'Delicate',
  },
  {
    type: 'Tastes',
    group: 'Sweet',
    subgroup: 'Mellow',
    description: 'Mild',
  },
  {
    type: 'Tastes',
    group: 'Sweet',
    subgroup: 'Acidy',
    description: 'Nippy',
  },
  {
    type: 'Tastes',
    group: 'Sweet',
    subgroup: 'Acidy',
    description: 'Piquant',
  },
  {
    type: 'Tastes',
    group: 'Sour',
    subgroup: 'Winey',
    description: 'Tangy',
  },
  {
    type: 'Tastes',
    group: 'Sour',
    subgroup: 'Winey',
    description: 'Tart',
  },
  {
    type: 'Tastes',
    group: 'Sour',
    subgroup: 'Soury',
    description: 'Hard',
  },
  {
    type: 'Tastes',
    group: 'Sour',
    subgroup: 'Soury',
    description: 'Acrid',
  },
]