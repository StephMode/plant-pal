const plants = [
    {
      "id": "1",
      "name": "Snake Plant",
      "botanicalName": "Sansevieria trifasciata",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/45/Sansevieria_trifasciata_Laurentii_pm_4.jpg",
      "waterNeed": "Low",
      "lightNeed": "Partial Shade",
      "fertiliserSeason": ["Spring", "Summer"],
      "description": "The Snake Plant, also known as Mother-in-Law's Tongue, is a hardy and low-maintenance plant that can thrive in low light and requires minimal watering."
    },
    {
      "id": "2",
      "name": "Fiddle Leaf Fig",
      "botanicalName": "Ficus lyrata",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/84/Starr_031108-0130_Ficus_lyrata.jpg",
      "waterNeed": "Medium",
      "lightNeed": "Full Sun",
      "fertiliserSeason": ["Spring"],
      "description": "The Fiddle Leaf Fig is a popular indoor tree known for its large, violin-shaped leaves. It prefers bright, indirect light and consistent watering."
    },
    {
      "id": "3",
      "name": "Aloe Vera",
      "botanicalName": "Aloe barbadensis miller",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Aloe_Vera.jpg",
      "waterNeed": "Low",
      "lightNeed": "Full Sun",
      "fertiliserSeason": ["Summer"],
      "description": "Aloe Vera is a succulent plant species known for its medicinal properties. It requires bright light and minimal water, making it easy to care for."
    },
    {
      "id": "4",
      "name": "Spider Plant",
      "botanicalName": "Chlorophytum comosum",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Chlorophytum_comosum_Ampel.jpg",
      "waterNeed": "Low",
      "lightNeed": "Partial Shade",
      "fertiliserSeason": ["Spring", "Summer"],
      "description": "The Spider Plant is a resilient houseplant known for its air-purifying qualities and ability to thrive in a variety of light conditions."
    },
    {
      "id": "5",
      "name": "Peace Lily",
      "botanicalName": "Spathiphyllum",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Spathiphyllum_cochlearispathum_RTBG.jpg",
      "waterNeed": "High",
      "lightNeed": "Full Shade",
      "fertiliserSeason": ["Spring", "Summer"],
      "description": "Peace Lilies are known for their beautiful white flowers and ability to thrive in low light. They require frequent watering to maintain their lush foliage."
    },
    {
      "id": "6",
      "name": "Rubber Plant",
      "botanicalName": "Ficus elastica",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c6/Ficus_elastica_%28rubber_plant%29.jpg",
      "waterNeed": "Medium",
      "lightNeed": "Partial Shade",
      "fertiliserSeason": ["Spring", "Fall"],
      "description": "The Rubber Plant is a popular indoor tree with large, glossy leaves. It thrives in medium to bright light and needs regular watering."
    },
    {
      "id": "7",
      "name": "ZZ Plant",
      "botanicalName": "Zamioculcas zamiifolia",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b9/Zamioculcas_zamiifolia_Chameleon_1.jpg",
      "waterNeed": "Low",
      "lightNeed": "Partial Shade",
      "fertiliserSeason": ["Spring", "Summer"],
      "description": "The ZZ Plant is a hardy and drought-tolerant plant that can survive in low light and requires minimal watering, making it perfect for beginners."
    },
    {
      "id": "8",
      "name": "Monstera Deliciosa",
      "botanicalName": "Monstera deliciosa",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/04/Monstera_deliciosa3.jpg",
      "waterNeed": "Medium",
      "lightNeed": "Partial Shade",
      "fertiliserSeason": ["Spring", "Summer"],
      "description": "Monstera Deliciosa, also known as the Swiss Cheese Plant, is famous for its large, split leaves. It prefers indirect light and moderate watering."
    },
    {
      "id": "9",
      "name": "Pothos",
      "botanicalName": "Epipremnum aureum",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/62/Money_Plant_%28Epipremnum_aureum%29_4.jpg",
      "waterNeed": "Low",
      "lightNeed": "Partial Shade",
      "fertiliserSeason": ["Spring", "Summer"],
      "description": "Pothos is a versatile and low-maintenance plant that can thrive in low light and requires infrequent watering. It's known for its trailing vines."
    },
    {
      "id": "10",
      "name": "Boston Fern",
      "botanicalName": "Nephrolepis exaltata",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/30/Boston_Fern_%282873392811%29.png",
      "waterNeed": "High",
      "lightNeed": "Partial Shade",
      "fertiliserSeason": ["Spring", "Summer"],
      "description": "Boston Ferns are lush, green plants that thrive in humid environments with bright, indirect light. They need regular watering to keep their fronds healthy."
    },
    {
      "id": "11",
      "name": "Orchid",
      "botanicalName": "Orchidaceae",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2a/White_orchid_in_Clara_bog._03.jpg",
      "waterNeed": "Low",
      "lightNeed": "Partial Shade",
      "fertiliserSeason": ["Spring", "Summer"],
      "description": "Orchids are elegant flowering plants that prefer bright, indirect light and minimal watering. They are known for their beautiful and long-lasting blooms."
    },
    {
      "id": "12",
      "name": "Jade Plant",
      "botanicalName": "Crassula ovata",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/27/Crassula_bonsai.jpg",
      "waterNeed": "Low",
      "lightNeed": "Full Sun",
      "fertiliserSeason": ["Spring", "Fall"],
      "description": "The Jade Plant is a succulent known for its thick, fleshy leaves. It thrives in bright light and requires minimal watering, making it easy to care for."
    },
    {
      "id": "13",
      "name": "Philodendron",
      "botanicalName": "Philodendron spp.",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Philodendron_giganteum_-_Laeken_Royal_Greenhouses_-_Royal_Castle_of_Laeken_-_Brussels%2C_Belgium_-_DSC07236.jpg",
      "waterNeed": "Medium",
      "lightNeed": "Partial Shade",
      "fertiliserSeason": ["Spring", "Summer"],
      "description": "Philodendrons are popular houseplants known for their heart-shaped leaves. They prefer indirect light and consistent watering."
    },
    {
      "id": "14",
      "name": "Cactus",
      "botanicalName": "Cactaceae",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/12/Singapore_Botanic_Gardens_Cactus_Garden_2.jpg",
      "waterNeed": "Low",
      "lightNeed": "Full Sun",
      "fertiliserSeason": ["Summer"],
      "description": "Cacti are desert plants that thrive in bright light and require very little water. They are known for their unique shapes and spines."
    },
    {
      "id": "15",
      "name": "Lavender",
      "botanicalName": "Lavandula",
      "imageUrl": "https://en.wikipedia.org/wiki/Lavandula#/media/File:Lavender02.jpg",
      "waterNeed": "Low",
      "lightNeed": "Full Sun",
      "fertiliserSeason": ["Spring"],
      "description": "Lavender is a fragrant herb known for its purple flowers and soothing scent. It requires full sun and minimal watering."
    },
    {
      "id": "16",
      "name": "Succulent",
      "botanicalName": "Succulents",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Astroloba_tenax_6.jpg",
      "waterNeed": "Low",
      "lightNeed": "Full Sun",
      "fertiliserSeason": ["Summer", "Fall"],
      "description": "Succulents are a diverse group of plants known for their water-storing capabilities. They thrive in bright light and require minimal watering."
    },
    {
      "id": "17",
      "name": "Calathea",
      "botanicalName": "Calathea spp.",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e7/Starr_080716-9470_Calathea_crotalifera.jpg",
      "waterNeed": "High",
      "lightNeed": "Full Shade",
      "fertiliserSeason": ["Spring", "Summer"],
      "description": "Calatheas are known for their stunning, patterned leaves. They thrive in low light and high humidity, requiring regular watering to keep their foliage vibrant."
    },
    {
      "id": "18",
      "name": "Yucca",
      "botanicalName": "Yucca",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6c/Yucca_aloifolia_4.jpg",
      "waterNeed": "Low",
      "lightNeed": "Full Sun",
      "fertiliserSeason": ["Spring"],
      "description": "Yucca plants are hardy and drought-tolerant, known for their long, sword-shaped leaves. They thrive in bright light and require minimal watering."
    },
    {
      "id": "19",
      "name": "Bamboo",
      "botanicalName": "Bambusoideae",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Bamboo_Forest%2C_Gochangupseong_Fortress%2C_South_Korea_%282%29.jpg",
      "waterNeed": "Medium",
      "lightNeed": "Full Sun",
      "fertiliserSeason": ["Spring", "Summer"],
      "description": "Bamboo plants are fast-growing and known for their tall, graceful stalks. They prefer bright light and consistent watering, especially during the growing season."
    },
    {
      "id": "20",
      "name": "Anthurium",
      "botanicalName": "Anthurium",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/96/Flamingo_Flower_Orchid.JPG",
      "waterNeed": "Medium",
      "lightNeed": "Partial Shade",
      "fertiliserSeason": ["Spring", "Fall"],
      "description": "Anthuriums are known for their striking, heart-shaped flowers and glossy leaves. They prefer bright, indirect light and moderate watering."
    },
    {
      "id": "21",
      "name": "English Ivy",
      "botanicalName": "Hedera helix",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/19/Ivy_in_Hyde_Park.JPG",
      "waterNeed": "Medium",
      "lightNeed": "Full Shade",
      "fertiliserSeason": ["Spring", "Summer"],
      "description": "English Ivy is a versatile plant known for its trailing vines and ability to thrive in shaded areas. It requires moderate watering."
    },
    {
      "id": "22",
      "name": "Dumb Cane",
      "botanicalName": "Dieffenbachia",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/ac/Dieffenbachia_houseplant.jpg",
      "waterNeed": "High",
      "lightNeed": "Partial Shade",
      "fertiliserSeason": ["Spring", "Summer"],
      "description": "Dumb Cane is a popular houseplant known for its large, variegated leaves. It prefers indirect light and regular watering."
    },
    {
      "id": "23",
      "name": "Golden Pothos",
      "botanicalName": "Epipremnum aureum",
      "imageUrl": "https://en.wikipedia.org/wiki/Epipremnum_aureum#/media/File:Epipremnum_aureum_(Marble_Queen)_houseplant.png",
      "waterNeed": "Low",
      "lightNeed": "Partial Shade",
      "fertiliserSeason": ["Spring", "Summer"],
      "description": "Golden Pothos is a low-maintenance plant that can thrive in low light and requires infrequent watering. It's known for its trailing vines."
    },
    {
      "id": "24",
      "name": "Peace Lily",
      "botanicalName": "Spathiphyllum",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Spathiphyllum_cochlearispathum_RTBG.jpg",
      "waterNeed": "High",
      "lightNeed": "Full Shade",
      "fertiliserSeason": ["Spring", "Summer"],
      "description": "Peace Lilies are known for their beautiful white flowers and ability to thrive in low light. They require frequent watering to maintain their lush foliage."
    },
    {
      "id": "25",
      "name": "Areca Palm",
      "botanicalName": "Dypsis lutescens",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/22/%E6%95%A3%E5%B0%BE%E8%91%B5Dypsis_lutescens_20210511145013_05.jpg",
      "waterNeed": "Medium",
      "lightNeed": "Partial Shade",
      "fertiliserSeason": ["Spring", "Summer"],
      "description": "Areca Palms are popular indoor palms known for their feathery, arching fronds. They prefer indirect light and regular watering."
    },
    {
      "id": "26",
      "name": "Swiss Cheese Plant",
      "botanicalName": "Monstera adansonii",
      "imageUrl": "https://en.wikipedia.org/wiki/Monstera_adansonii#/media/File:Monstera_Adansonii.jpg",
      "waterNeed": "Medium",
      "lightNeed": "Partial Shade",
      "fertiliserSeason": ["Spring", "Summer"],
      "description": "The Swiss Cheese Plant is known for its unique, perforated leaves. It prefers bright, indirect light and moderate watering."
    },
    {
      "id": "27",
      "name": "Chinese Money Plant",
      "botanicalName": "Pilea peperomioides",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Pilea_peperomioides_Chinese_money_plant.jpg",
      "waterNeed": "Low",
      "lightNeed": "Partial Shade",
      "fertiliserSeason": ["Spring", "Summer"],
      "description": "The Chinese Money Plant is a trendy houseplant known for its round, coin-shaped leaves. It thrives in bright, indirect light and requires minimal watering."
    },
    {
      "id": "28",
      "name": "Bird of Paradise",
      "botanicalName": "Strelitzia reginae",
      "imageUrl": "https://en.wikipedia.org/wiki/Strelitzia_reginae#/media/File:Bird_of_Paradise_flower.JPG",
      "waterNeed": "High",
      "lightNeed": "Full Sun",
      "fertiliserSeason": ["Spring", "Summer"],
      "description": "Bird of Paradise is known for its striking, tropical flowers. It requires bright light and regular watering to thrive."
    },
    {
      "id": "29",
      "name": "Jade Plant",
      "botanicalName": "Crassula ovata",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Crassula_ovata_700.jpg",
      "waterNeed": "Low",
      "lightNeed": "Full Sun",
      "fertiliserSeason": ["Spring", "Fall"],
      "description": "The Jade Plant is a succulent known for its thick, fleshy leaves. It thrives in bright light and requires minimal watering, making it easy to care for."
    },
    {
      "id": "30",
      "name": "African Violet",
      "botanicalName": "Saintpaulia",
      "imageUrl": "https://en.wikipedia.org/wiki/Streptocarpus_sect._Saintpaulia#/media/File:African_violet_(Saintpaulia).jpg",
      "waterNeed": "Medium",
      "lightNeed": "Partial Shade",
      "fertiliserSeason": ["Spring", "Summer"],
      "description": "African Violets are popular indoor flowering plants known for their vibrant, velvety flowers. They prefer indirect light and moderate watering."
    }
  ]

  export default plants;