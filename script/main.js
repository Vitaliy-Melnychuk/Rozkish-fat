const categories = {
    mainGallery: [
        {name: 's2021_001', data: 'id="s2021_001"', description: '', descriptionStyle: 's2021_001', folder: 'maingallery'},
        {name: 's2021_002', data: 'id="s2021_002"', description: '', descriptionStyle: 's2021_002', folder: 'maingallery'},
        {name: 's2021_003', data: 'id="s2021_003"', description: '', descriptionStyle: 's2021_003', folder: 'maingallery'},
        {name: 's2021_004', data: 'id="s2021_004"', description: '', descriptionStyle: 's2021_004', folder: 'maingallery'},
        {name: 's2021_005', data: 'id="s2021_005"', description: '', descriptionStyle: 's2021_005', folder: 'maingallery'},
        {name: 's2021_006', data: 'id="s2021_006"', description: '', descriptionStyle: 's2021_006', folder: 'maingallery'},
        {name: 's2021_007', data: 'id="s2021_007"', description: '', descriptionStyle: 's2021_007', folder: 'maingallery'},
        {name: 's2021_008', data: 'id="s2021_008"', description: '', descriptionStyle: 's2021_008', folder: 'maingallery'},
        {name: 's2021_009', data: 'id="s2021_009"', description: '', descriptionStyle: 's2021_009', folder: 'maingallery'},
        {name: 's2021_010', data: 'id="s2021_010"', description: '', descriptionStyle: 's2021_010', folder: 'maingallery'},
    ],
    compVyshyvka: [
        {name: 's2022_001', data: 'id="s2022"', description: 'Колекция 2022<span class="catalog__description-letter">г</span>', descriptionStyle: 'Свадебные платья', folder: 's2022'},
        {name: 's2021_001', data: 'id="s2021"', description: 'Колекция 2021<span class="catalog__description-letter">г</span>', descriptionStyle: 'Свадебные платья', folder: 's2021'},
        {name: 's2020_001', data: 'id="s2020"', description: 'Колекция 2020<span class="catalog__description-letter">г</span>', descriptionStyle: 'Свадебные платья', folder: 's2020'},
    ],
    plotnaVyshyvka: [
        {name: 'plv1x_5017', data: 'id="plv1x"', description: 'Колекцiя (1x)<span class="catalog__description-letter"></span>', descriptionStyle: 'Плотна вишивка', folder: 'plv1x'},
        {name: 'plv2x_1502', data: 'id="plv2x"', description: 'Колекцiя (2x)<span class="catalog__description-letter"></span>', descriptionStyle: 'Плотна вишивка', folder: 'plv2x'},
        {name: 'plv3x_1510', data: 'id="plv3x"', description: 'Колекцiя (3x)<span class="catalog__description-letter"></span>', descriptionStyle: 'Плотна вишивка', folder: 'plv3x'},
    ],
    emirStyle: [
        {name: 'v2020_001', data: 'id="v2020"', description: 'Колекция 2020<span class="catalog__description-letter">г</span>', descriptionStyle: 'Вечерние платья', folder: 'v2020'},
        {name: 'v2020_001', data: 'id="v2020"', description: 'Колекция 2020<span class="catalog__description-letter">г</span>', descriptionStyle: 'Вечерние платья', folder: 'v2020'},
        {name: 'v2021_001', data: 'id="v2021"', description: 'Колекция 2021<span class="catalog__description-letter">г</span>', descriptionStyle: 'Вечерние платья', folder: 'v2021'},
    ],
    krugevo: [
        {name: 'v2020_001', data: 'id="v2020"', description: 'Колекция 2020<span class="catalog__description-letter">г</span>', descriptionStyle: 'Вечерние платья', folder: 'v2020'},
        {name: 'v2020_001', data: 'id="v2020"', description: 'Колекция 2020<span class="catalog__description-letter">г</span>', descriptionStyle: 'Вечерние платья', folder: 'v2020'},
        {name: 'v2021_001', data: 'id="v2021"', description: 'Колекция 2021<span class="catalog__description-letter">г</span>', descriptionStyle: 'Вечерние платья', folder: 'v2021'},
    ],
    biser: [
        {name: 'v2020_001', data: 'id="v2020"', description: 'Колекцiя 2020<span class="catalog__description-letter">г</span>', descriptionStyle: 'Вечерние платья', folder: 'v2020'},
        {name: 'v2020_001', data: 'id="v2020"', description: 'Колекцiя 2020<span class="catalog__description-letter">г</span>', descriptionStyle: 'Вечерние платья', folder: 'v2020'},
        {name: 'v2021_001', data: 'id="v2021"', description: 'Колекцiя 2021<span class="catalog__description-letter">г</span>', descriptionStyle: 'Вечерние платья', folder: 'v2021'},
    ],
    obrizni: [
        {name: 'obr1x_1001', data: 'id="obr1x"', description: 'Колекцiя євростиль<span class="catalog__description-letter">г</span>', descriptionStyle: 'Обрізні євростиль', folder: 'obr1x'},
        {name: 'obr2x_1025', data: 'id="obr2x"', description: 'Колекцiя на гребні<span class="catalog__description-letter">г</span>', descriptionStyle: 'Обрізні на гребні', folder: 'obr2x'},
    ],
    plv3x: [
        {name: 'plv3x_1503', data: 'id="plv3x_1503"', description: '', descriptionStyle: '#1503', folder: 'plv3x', one: `1.5*1.5 - 11$`, two: `2*1.5 - 15$`, three: `2.6*1.5 - 18$`, four: `3*1.5 - 22$`},
        {name: 'plv3x_1504', data: 'id="plv3x_1504"', description: '', descriptionStyle: '#1504', folder: 'plv3x', one: `1.5*1.5 - 11$`, two: `2*1.5 - 15$`, three: `2.6*1.5 - 18$`, four: `3*1.5 - 22$`},
        {name: 'plv3x_1505', data: 'id="plv3x_1505"', description: '', descriptionStyle: '#1505', folder: 'plv3x', one: `1.5*1.5 - 11$`, two: `2*1.5 - 15$`, three: `2.6*1.5 - 18$`, four: `3*1.5 - 22$`},
        {name: 'plv3x_1507', data: 'id="plv3x_1507"', description: '', descriptionStyle: '#1507', folder: 'plv3x', one: `1.5*1.5 - 11$`, two: `2*1.5 - 15$`, three: `2.6*1.5 - 18$`, four: `3*1.5 - 22$`},
        {name: 'plv3x_1508', data: 'id="plv3x_1508"', description: '', descriptionStyle: '#1508', folder: 'plv3x', one: `1.5*1.5 - 11$`, two: `2*1.5 - 15$`, three: `2.6*1.5 - 18$`, four: `3*1.5 - 22$`},
        {name: 'plv3x_1509', data: 'id="plv3x_1509"', description: '', descriptionStyle: '#1509', folder: 'plv3x', one: `1.5*1.5 - 11$`, two: `2*1.5 - 15$`, three: `2.6*1.5 - 18$`, four: `3*1.5 - 22$`},
        {name: 'plv3x_1510', data: 'id="plv3x_1510"', description: '', descriptionStyle: '#1510', folder: 'plv3x', one: `1.5*1.5 - 11$`, two: `2*1.5 - 15$`, three: `2.6*1.5 - 18$`, four: `3*1.5 - 22$`},
        {name: 'plv3x_1511', data: 'id="plv3x_1511"', description: '', descriptionStyle: '#1511', folder: 'plv3x', one: `1.5*1.5 - 11$`, two: `2*1.5 - 15$`, three: `2.6*1.5 - 18$`, four: `3*1.5 - 22$`},
        {name: 'plv3x_1512', data: 'id="plv3x_1512"', description: '', descriptionStyle: '#1512', folder: 'plv3x', one: `1.5*1.5 - 11$`, two: `2*1.5 - 15$`, three: `2.6*1.5 - 18$`, four: `3*1.5 - 22$`},
        {name: 'plv3x_1513', data: 'id="plv3x_1513"', description: '', descriptionStyle: '#1513', folder: 'plv3x', one: `1.5*1.5 - 11$`, two: `2*1.5 - 15$`, three: `2.6*1.5 - 18$`, four: `3*1.5 - 22$`},
        {name: 'plv3x_1515', data: 'id="plv3x_1515"', description: '', descriptionStyle: '#1515', folder: 'plv3x', one: `1.5*1.5 - 11$`, two: `2*1.5 - 15$`, three: `2.6*1.5 - 18$`, four: `3*1.5 - 22$`},
        {name: 'plv3x_1516', data: 'id="plv3x_1516"', description: '', descriptionStyle: '#1516', folder: 'plv3x', one: `1.5*1.5 - 11$`, two: `2*1.5 - 15$`, three: `2.6*1.5 - 18$`, four: `3*1.5 - 22$`},
        {name: 'plv3x_1517', data: 'id="plv3x_1517"', description: '', descriptionStyle: '#1517', folder: 'plv3x', one: `1.5*1.5 - 11$`, two: `2*1.5 - 15$`, three: `2.6*1.5 - 18$`, four: `3*1.5 - 22$`},
        {name: 'plv3x_1518', data: 'id="plv3x_1518"', description: '', descriptionStyle: '#1518', folder: 'plv3x', one: `1.5*1.5 - 11$`, two: `2*1.5 - 15$`, three: `2.6*1.5 - 18$`, four: `3*1.5 - 22$`},
        {name: 'plv3x_1519', data: 'id="plv3x_1519"', description: '', descriptionStyle: '#1519', folder: 'plv3x', one: `1.5*1.5 - 11$`, two: `2*1.5 - 15$`, three: `2.6*1.5 - 18$`, four: `3*1.5 - 22$`},
        {name: 'plv3x_1520', data: 'id="plv3x_1520"', description: '', descriptionStyle: '#1520', folder: 'plv3x', one: `1.5*1.5 - 11$`, two: `2*1.5 - 15$`, three: `2.6*1.5 - 18$`, four: `3*1.5 - 22$`},
        {name: 'plv3x_1525', data: 'id="plv3x_1525"', description: '', descriptionStyle: '#1525', folder: 'plv3x', one: `1.5*1.5 - 11$`, two: `2*1.5 - 15$`, three: `2.6*1.5 - 18$`, four: `3*1.5 - 22$`},
        {name: 'plv3x_1527', data: 'id="plv3x_1527"', description: '', descriptionStyle: '#1527', folder: 'plv3x', one: `1.5*1.5 - 11$`, two: `2*1.5 - 15$`, three: `2.6*1.5 - 18$`, four: `3*1.5 - 22$`},
        {name: 'plv3x_5002', data: 'id="plv3x_5002"', description: '', descriptionStyle: '#5002', folder: 'plv3x', one: `1.5*1.5 - 11$`, two: `2*1.5 - 15$`, three: `2.6*1.5 - 18$`, four: `3*1.5 - 22$`},
        {name: 'plv3x_5004', data: 'id="plv3x_5004"', description: '', descriptionStyle: '#5004', folder: 'plv3x', one: `1.5*1.5 - 11$`, two: `2*1.5 - 15$`, three: `2.6*1.5 - 18$`, four: `3*1.5 - 22$`},
        {name: 'plv3x_5018', data: 'id="plv3x_5018"', description: '', descriptionStyle: '#5018', folder: 'plv3x', one: `1.5*1.5 - 11$`, two: `2*1.5 - 15$`, three: `2.6*1.5 - 18$`, four: `3*1.5 - 22$`},
        {name: 'plv3x_5025', data: 'id="plv3x_5025"', description: '', descriptionStyle: '#5025', folder: 'plv3x', one: `1.5*1.5 - 11$`, two: `2*1.5 - 15$`, three: `2.6*1.5 - 18$`, four: `3*1.5 - 22$`},
        {name: 'plv3x_5027', data: 'id="plv3x_5027"', description: '', descriptionStyle: '#5027', folder: 'plv3x', one: `1.5*1.5 - 11$`, two: `2*1.5 - 15$`, three: `2.6*1.5 - 18$`, four: `3*1.5 - 22$`},
        {name: 'plv3x_5028', data: 'id="plv3x_5028"', description: '', descriptionStyle: '#5028', folder: 'plv3x', one: `1.5*1.5 - 11$`, two: `2*1.5 - 15$`, three: `2.6*1.5 - 18$`, four: `3*1.5 - 22$`},
        {name: 'plv3x_5031', data: 'id="plv3x_5031"', description: '', descriptionStyle: '#5031', folder: 'plv3x', one: `1.5*1.5 - 11$`, two: `2*1.5 - 15$`, three: `2.6*1.5 - 18$`, four: `3*1.5 - 22$`},
        {name: 'plv3x_5033', data: 'id="plv3x_5033"', description: '', descriptionStyle: '#5033', folder: 'plv3x', one: `1.5*1.5 - 11$`, two: `2*1.5 - 15$`, three: `2.6*1.5 - 18$`, four: `3*1.5 - 22$`},
        {name: 'plv3x_5038', data: 'id="plv3x_5038"', description: '', descriptionStyle: '#5038', folder: 'plv3x', one: `1.5*1.5 - 11$`, two: `2*1.5 - 15$`, three: `2.6*1.5 - 18$`, four: `3*1.5 - 22$`},
        {name: 'plv3x_5043', data: 'id="plv3x_5043"', description: '', descriptionStyle: '#5043', folder: 'plv3x', one: `1.5*1.5 - 11$`, two: `2*1.5 - 15$`, three: `2.6*1.5 - 18$`, four: `3*1.5 - 22$`},
        {name: 'plv3x_5044', data: 'id="plv3x_5044"', description: '', descriptionStyle: '#5044', folder: 'plv3x', one: `1.5*1.5 - 11$`, two: `2*1.5 - 15$`, three: `2.6*1.5 - 18$`, four: `3*1.5 - 22$`},
        {name: 'plv3x_5045', data: 'id="plv3x_5045"', description: '', descriptionStyle: '#5045', folder: 'plv3x', one: `1.5*1.5 - 11$`, two: `2*1.5 - 15$`, three: `2.6*1.5 - 18$`, four: `3*1.5 - 22$`},
        {name: 'plv3x_5047', data: 'id="plv3x_5047"', description: '', descriptionStyle: '#5047', folder: 'plv3x', one: `1.5*1.5 - 11$`, two: `2*1.5 - 15$`, three: `2.6*1.5 - 18$`, four: `3*1.5 - 22$`},
    ],
    plv2x: [
        {name: 'plv2x_1501', data: 'id="plv2x_1501"', description: '', descriptionStyle: '#1501', folder: 'plv2x', one: `1.5*1.5 - 7$`, two: `2*1.5 - 10$`, three: `2.6*1.5 - 12$`, four: `3*1.5 - 14$`},
        {name: 'plv2x_1502', data: 'id="plv2x_1502"', description: '', descriptionStyle: '#1502', folder: 'plv2x', one: `1.5*1.5 - 7$`, two: `2*1.5 - 10$`, three: `2.6*1.5 - 12$`, four: `3*1.5 - 14$`},
        {name: 'plv2x_1506', data: 'id="plv2x_1506"', description: '', descriptionStyle: '#1506', folder: 'plv2x', one: `1.5*1.5 - 7$`, two: `2*1.5 - 10$`, three: `2.6*1.5 - 12$`, four: `3*1.5 - 14$`},
        {name: 'plv2x_1521', data: 'id="plv2x_1521"', description: '', descriptionStyle: '#1521', folder: 'plv2x', one: `1.5*1.5 - 7$`, two: `2*1.5 - 10$`, three: `2.6*1.5 - 12$`, four: `3*1.5 - 14$`},
        {name: 'plv2x_1522', data: 'id="plv2x_1522"', description: '', descriptionStyle: '#1522', folder: 'plv2x', one: `1.5*1.5 - 7$`, two: `2*1.5 - 10$`, three: `2.6*1.5 - 12$`, four: `3*1.5 - 14$`},
        {name: 'plv2x_5001', data: 'id="plv2x_5001"', description: '', descriptionStyle: '#5001', folder: 'plv2x', one: `1.5*1.5 - 7$`, two: `2*1.5 - 10$`, three: `2.6*1.5 - 12$`, four: `3*1.5 - 14$`},
        {name: 'plv2x_5011', data: 'id="plv2x_5011"', description: '', descriptionStyle: '#5011', folder: 'plv2x', one: `1.5*1.5 - 7$`, two: `2*1.5 - 10$`, three: `2.6*1.5 - 12$`, four: `3*1.5 - 14$`},
        {name: 'plv2x_5012', data: 'id="plv2x_5012"', description: '', descriptionStyle: '#5012', folder: 'plv2x', one: `1.5*1.5 - 7$`, two: `2*1.5 - 10$`, three: `2.6*1.5 - 12$`, four: `3*1.5 - 14$`},
        {name: 'plv2x_5013', data: 'id="plv2x_5013"', description: '', descriptionStyle: '#5013', folder: 'plv2x', one: `1.5*1.5 - 7$`, two: `2*1.5 - 10$`, three: `2.6*1.5 - 12$`, four: `3*1.5 - 14$`},
        {name: 'plv2x_5014', data: 'id="plv2x_5014"', description: '', descriptionStyle: '#5014', folder: 'plv2x', one: `1.5*1.5 - 7$`, two: `2*1.5 - 10$`, three: `2.6*1.5 - 12$`, four: `3*1.5 - 14$`},
        {name: 'plv2x_5015', data: 'id="plv2x_5015"', description: '', descriptionStyle: '#5015', folder: 'plv2x', one: `1.5*1.5 - 7$`, two: `2*1.5 - 10$`, three: `2.6*1.5 - 12$`, four: `3*1.5 - 14$`},
        {name: 'plv2x_5016', data: 'id="plv2x_5016"', description: '', descriptionStyle: '#5016', folder: 'plv2x', one: `1.5*1.5 - 7$`, two: `2*1.5 - 10$`, three: `2.6*1.5 - 12$`, four: `3*1.5 - 14$`},
        {name: 'plv2x_5019', data: 'id="plv2x_5019"', description: '', descriptionStyle: '#5019', folder: 'plv2x', one: `1.5*1.5 - 7$`, two: `2*1.5 - 10$`, three: `2.6*1.5 - 12$`, four: `3*1.5 - 14$`},
        {name: 'plv2x_5020', data: 'id="plv2x_5020"', description: '', descriptionStyle: '#5020', folder: 'plv2x', one: `1.5*1.5 - 7$`, two: `2*1.5 - 10$`, three: `2.6*1.5 - 12$`, four: `3*1.5 - 14$`},
        {name: 'plv2x_5022', data: 'id="plv2x_5022"', description: '', descriptionStyle: '#5022', folder: 'plv2x', one: `1.5*1.5 - 7$`, two: `2*1.5 - 10$`, three: `2.6*1.5 - 12$`, four: `3*1.5 - 14$`},
        {name: 'plv2x_5023', data: 'id="plv2x_5023"', description: '', descriptionStyle: '#5023', folder: 'plv2x', one: `1.5*1.5 - 7$`, two: `2*1.5 - 10$`, three: `2.6*1.5 - 12$`, four: `3*1.5 - 14$`},
        {name: 'plv2x_5024', data: 'id="plv2x_5024"', description: '', descriptionStyle: '#5024', folder: 'plv2x', one: `1.5*1.5 - 7$`, two: `2*1.5 - 10$`, three: `2.6*1.5 - 12$`, four: `3*1.5 - 14$`},
        {name: 'plv2x_5026', data: 'id="plv2x_5026"', description: '', descriptionStyle: '#5026', folder: 'plv2x', one: `1.5*1.5 - 7$`, two: `2*1.5 - 10$`, three: `2.6*1.5 - 12$`, four: `3*1.5 - 14$`},
        {name: 'plv2x_5029', data: 'id="plv2x_5029"', description: '', descriptionStyle: '#5029', folder: 'plv2x', one: `1.5*1.5 - 7$`, two: `2*1.5 - 10$`, three: `2.6*1.5 - 12$`, four: `3*1.5 - 14$`},
        {name: 'plv2x_5030', data: 'id="plv2x_5030"', description: '', descriptionStyle: '#5030', folder: 'plv2x', one: `1.5*1.5 - 7$`, two: `2*1.5 - 10$`, three: `2.6*1.5 - 12$`, four: `3*1.5 - 14$`},
        {name: 'plv2x_5032', data: 'id="plv2x_5032"', description: '', descriptionStyle: '#5032', folder: 'plv2x', one: `1.5*1.5 - 7$`, two: `2*1.5 - 10$`, three: `2.6*1.5 - 12$`, four: `3*1.5 - 14$`},
        {name: 'plv2x_5034', data: 'id="plv2x_5034"', description: '', descriptionStyle: '#5034', folder: 'plv2x', one: `1.5*1.5 - 7$`, two: `2*1.5 - 10$`, three: `2.6*1.5 - 12$`, four: `3*1.5 - 14$`},
        {name: 'plv2x_5037', data: 'id="plv2x_5037"', description: '', descriptionStyle: '#5037', folder: 'plv2x', one: `1.5*1.5 - 7$`, two: `2*1.5 - 10$`, three: `2.6*1.5 - 12$`, four: `3*1.5 - 14$`},
        {name: 'plv2x_5040', data: 'id="plv2x_5040"', description: '', descriptionStyle: '#5040', folder: 'plv2x', one: `1.5*1.5 - 7$`, two: `2*1.5 - 10$`, three: `2.6*1.5 - 12$`, four: `3*1.5 - 14$`},
        {name: 'plv2x_5041', data: 'id="plv2x_5041"', description: '', descriptionStyle: '#5041', folder: 'plv2x', one: `1.5*1.5 - 7$`, two: `2*1.5 - 10$`, three: `2.6*1.5 - 12$`, four: `3*1.5 - 14$`},
        {name: 'plv2x_5042', data: 'id="plv2x_5042"', description: '', descriptionStyle: '#5042', folder: 'plv2x', one: `1.5*1.5 - 7$`, two: `2*1.5 - 10$`, three: `2.6*1.5 - 12$`, four: `3*1.5 - 14$`},
    ],
    plv1x: [
        {name: 'plv1x_5017', data: 'id="plv1x_5017"', description: '', descriptionStyle: '#5017', folder: 'plv1x', one: `1.5*1.5 - 4$`, two: `2*1.5 - 6$`, three: `2.6*1.5 - 8$`, four: `3*1.5 - 10$`},
        {name: 'plv1x_5035', data: 'id="plv1x_5035"', description: '', descriptionStyle: '#5035', folder: 'plv1x', one: `1.5*1.5 - 4$`, two: `2*1.5 - 6$`, three: `2.6*1.5 - 8$`, four: `3*1.5 - 10$`},
        {name: 'plv1x_5036', data: 'id="plv1x_5036"', description: '', descriptionStyle: '#5036', folder: 'plv1x', one: `1.5*1.5 - 4$`, two: `2*1.5 - 6$`, three: `2.6*1.5 - 8$`, four: `3*1.5 - 10$`},
        {name: 'plv1x_5039', data: 'id="plv1x_5039"', description: '', descriptionStyle: '#5039', folder: 'plv1x', one: `1.5*1.5 - 4$`, two: `2*1.5 - 6$`, three: `2.6*1.5 - 8$`, four: `3*1.5 - 10$`},
    ],
    obr1x: [
        {name: 'obr1x_1001', data: 'id="obr1x_1001"', description: '', descriptionStyle: '#1001', folder: 'obr1x', one: `1.5*1.5 - 4$`, two: `2*1.5 - 6$`, three: `2.6*1.5 - 8$`, four: `3*1.5 - 10$`},
        {name: 'obr1x_1003', data: 'id="obr1x_1003"', description: '', descriptionStyle: '#1003', folder: 'obr1x', one: `1.5*1.5 - 4$`, two: `2*1.5 - 6$`, three: `2.6*1.5 - 8$`, four: `3*1.5 - 10$`},
    ],
    obr2x: [
        {name: 'obr2x_1025', data: 'id="obr2x_1025"', description: '', descriptionStyle: '#1001', folder: 'obr1x', one: `1.5*1.5 - 4$`, two: `2*1.5 - 6$`, three: `2.6*1.5 - 8$`, four: `3*1.5 - 10$`},
        {name: 'obr2x_1014', data: 'id="obr2x_1014"', description: '', descriptionStyle: '#1014', folder: 'obr1x', one: `1.5*1.5 - 4$`, two: `2*1.5 - 6$`, three: `2.6*1.5 - 8$`, four: `3*1.5 - 10$`},
    ],
    v2021: [
        {name: 'v2021_001', data: 'id="v2021_001"', description: '150$', descriptionStyle: 'v2021_001', folder: 'v2021'},
        {name: 'v2021_002', data: 'id="v2021_002"', description: '160$', descriptionStyle: 'v2021_002', folder: 'v2021'},
        {name: 'v2021_007', data: 'id="v2021_007"', description: '170$', descriptionStyle: 'v2021_007', folder: 'v2021'},
        {name: 'v2021_004', data: 'id="v2021_004"', description: '180$', descriptionStyle: 'v2021_004', folder: 'v2021'},
        {name: 'v2021_005', data: 'id="v2021_005"', description: '180$', descriptionStyle: 'v2021_005', folder: 'v2021'},
        {name: 'v2021_006', data: 'id="v2021_006"', description: '180$', descriptionStyle: 'v2021_006', folder: 'v2021'},
    ],
    s2020: [
        {name: 's2020_001', data: 'id="s2020_001"', description: '150$', descriptionStyle: 'Свадебные платья', folder: 's2020'},
        {name: 's2020_002', data: 'id="s2020_002"', description: '160$', descriptionStyle: 'Свадебные платья', folder: 's2020'},
        {name: 's2020_003', data: 'id="s2020_003"', description: '170$', descriptionStyle: 'Свадебные платья', folder: 's2020'},
        {name: 's2020_004', data: 'id="s2020_004"', description: '180$', descriptionStyle: 'Свадебные платья', folder: 's2020'},
        {name: 's2020_005', data: 'id="s2020_005"', description: '180$', descriptionStyle: 'Свадебные платья', folder: 's2020'},
    ],
    v2020: [
        {name: 'v2020_001', data: 'id="v2020_001"', description: '150$', descriptionStyle: 'Свадебные платья', folder: 'v2020'},
        {name: 'v2020_002', data: 'id="v2020_002"', description: '160$', descriptionStyle: 'Свадебные платья', folder: 'v2020'},
        {name: 'v2020_003', data: 'id="v2020_003"', description: '170$', descriptionStyle: 'Свадебные платья', folder: 'v2020'},
        {name: 'v2020_004', data: 'id="v2020_004"', description: '180$', descriptionStyle: 'Свадебные платья', folder: 'v2020'},
        {name: 'v2020_005', data: 'id="v2020_005"', description: '180$', descriptionStyle: 'Свадебные платья', folder: 'v2020'},
    ],
};

const bodyEl = document.querySelector('body');
const catalogEl = document.querySelector('.catalog__list');
bodyEl.addEventListener('click', directoryActivation);

function directoryActivation (evt) {
    const isCollectionEl = evt.target.classList.contains('active-element');
    if (!isCollectionEl) {
        return;
    }
    let nameArray = evt.target.dataset.id;
    for (const category in categories) {
        if (category === nameArray) {
            createDirectory(categories[category]);
        }
    }
}
function createDirectory (models) {
    const liEl = models.map( models => {
        return `
                <li class="catalog__item">
                    <div class="catalog__wrapper-img">
                        <a class="catalog__link">
                            <img 
                            class="catalog__img active-element" 
                            src="./images/${models.folder}/${models.name}.jpg" 
                            alt="photo"
                            data-${models.data}
                            />
                        </a>
                    </div>
                    <div class="catalog__description-wrapper">
                        <p>${models.description}</p>
                        <div class="catalog__description-border">
                            <div class="catalog__description catalog__active">
                                ${models.descriptionStyle}
                            </div>
                        </div>
                    </div>
                </li>
              `;
    }).join('');
    catalogEl.innerHTML = liEl;
    checkActivityBackdropMenu();
}
function createMainGallery () {
    const liEl = categories.mainGallery.map(objectGallery => {
        return `
            <li class="main-gallery__item">
                <div class="main-gallery__wrapper-img">
                    <a class="main-gallery__link">
                        <img 
                            class="main-gallery__img active-element" 
                            src="./images/${objectGallery.folder}/${objectGallery.name}.jpg" 
                            alt="photo"
                            data-${objectGallery.data}
                        />
                    </a>
                </div>
            </li>
        `;
    }).join('');
    catalogEl.innerHTML = liEl;
    setMainGalleryEl();
}
let iq = 0;
let ia = 0;
function setMainGalleryEl () {
    if ( iq >= 1) {ia = iq;}
    iq++;
    const mainGalleryEl = document.querySelectorAll('.main-gallery__item');
    const arrayMainGalleryEl = [...mainGalleryEl];
    const lengthEl = arrayMainGalleryEl.length;
    checkLengthEl(ia, arrayMainGalleryEl, lengthEl);
}
function checkLengthEl (is, arrayCheckEl, lengthEl) {
    if (is < lengthEl) {
        arrayCheckEl.map(arrayEl => arrayEl.classList.remove('absolute-opacity'));
        arrayCheckEl[is].classList.add('absolute-opacity');
        setTimeout(setMainGalleryEl, 2000);
    } else {
        arrayCheckEl[is-1].classList.add('absolute-opacity');
    }
}

createMainGallery();

const burgerMenuEl = document.querySelector('.header__wrapper-menu');
const closeMenuEl = document.querySelector('.backdrop-menu__wrapper');
const backdropMenuEl = document.querySelector('.backdrop-menu');
burgerMenuEl.addEventListener('click', isActiveMenu);
closeMenuEl.addEventListener('click', isActiveMenu);

function isActiveMenu () {
    backdropMenuEl.classList.toggle('is-active');
}

function checkActivityBackdropMenu () {
    backdropMenuEl.classList.remove('is-active');
}

const searchEl = document.querySelector('.header__wrapper-loupe');
searchEl.addEventListener('click', createSearch);
function createSearch () {
    catalogEl.innerHTML = `
        <div class="search">
            <div class="search__wrapper">
                <input class="search__input" type="text" autofocus placeholder="Введите код модели"/>
                <button class="search__btn">Найти</button>
            </div>
            <div>
                <ul class="search__result"></ul>
            </div>
        </div>
    `;
}

catalogEl.addEventListener('click', getPhotoNumber);
function getPhotoNumber (evt) {
    const isEl = evt.target.classList.contains('search__btn');
    if (!isEl) {
        return;
    }
    const searchResultEl = document.querySelector('.search__result');
    const inputValueEl = document.querySelector('.search__input');
    const inpValue = inputValueEl.value;
    let categoryArray = inpValue[0]+inpValue[1]+inpValue[2]+inpValue[3]+inpValue[4];
    for (let category in categories) {
        if (category === categoryArray) {
            let categoryArray = categories[category];
            createPhotoDescription(categoryArray, inpValue);
        }
    }
}
function createPhotoDescription (categoryArray, inpValue) {
    const searchResultEl = document.querySelector('.search__result');
    const resultEl = categoryArray.map(createElement => {
        if (createElement.name === inpValue) {
            return `
                <li class="full-description__item">
                    <div class="full-description__wrapper">
                        <a class="catalog__link">
                            <img 
                            class="catalog__img" 
                            src="./images/${createElement.folder}/${createElement.name}.jpg" 
                            alt="photo"
                            data-${createElement.data}
                            />
                        </a>
                    </div>
                </li>
                <li class="full-description__item">
                    <div class="full-description__wrapper">
                        <p class="full-description__text">Номер модели - ${createElement.name}</p>
                        <p class="full-description__text">Из колекции - ${createElement.folder}</p>
                        <p class="full-description__text">Цена - ${createElement.description}</p> 
                    </div>
                </li>
            `;
        }
    }).join(''); 
    searchResultEl.innerHTML = resultEl;
}
catalogEl.addEventListener('click', getPhotoDescription);
function getPhotoDescription (evt) {
    let idName = evt.target.dataset.id;
    let nameFolder = idName[0]+idName[1]+idName[2]+idName[3]+idName[4];
    createPhotoDescriptionTwo(nameFolder, idName);
}
function createPhotoDescriptionTwo (nameFolder, idName) {
    let categoryArray = categories[nameFolder];
    const resultEl = categoryArray.map(createElement => {
        if (createElement.name === idName) {
            return `
                <li class="full-description__item">
                    <div class="full-description__wrapper">
                        <a class="catalog__link">
                            <img 
                            class="catalog__img" 
                            src="./images/${createElement.folder}/${createElement.name}.jpg" 
                            alt="photo"
                            data-${createElement.data}
                            />
                        </a>
                    </div>
                </li>
                <li class="full-description__item">
                    <div class="full-description__wrapper">
                        <p class="full-description__text">Номер моделі - #${createElement.name[6]+createElement.name[7]+createElement.name[8]+createElement.name[9]}</p>
                        <p class="full-description__text">${createElement.one}</p>
                        <p class="full-description__text">${createElement.two}</p>
                        <p class="full-description__text">${createElement.three}</p>
                        <p class="full-description__text">${createElement.four}</p> 
                    </div>
                </li>
            `;
        }
    }).join(''); 
    catalogEl.innerHTML = resultEl;
}