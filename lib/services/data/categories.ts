import type { ServiceCategory } from '../types';

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'specials',
    name: 'Specials',
    description: 'Limited time offers and exclusive deals',
    imageUrl: '/images/specials.avif',
    services: [
      {
        id: 'endless-beauty-blowout',
        name: 'Endless Beauty Client Blowout',
        description: 'Luxury blowout treatment for regular clients',
        price: 30,
        duration: '45 mins',
        category: 'specials'
      },
      {
        id: 'wednesday-blowdry',
        name: 'Wednesday Blow Dry Promo',
        description: 'Indulge in luxury every Wednesday with our $35 package, featuring a lavish shampoo and expert blow dry. Elevate your midweek routine, revitalizing your hair for days with voluminous, bouncy locks that exude style and confidence.',
        price: 35,
        duration: '45 mins',
        category: 'specials'
      },
      {
        id: 'gentlemens-tuesday',
        name: 'Gentlemens Tuesday',
        description: "Get the perfect haircut and beard trim tailored to your style and preferences at Gentlemen's Tuesday. Our skilled stylists will give you a customized look, complete with a soothing hot towel treatment for ultimate relaxation. Only available to book on Tuesdays.",
        price: 35,
        duration: '30 mins',
        category: 'specials'
      }
    ]
  },
  {
    id: 'haircuts',
    name: 'Haircuts and Other',
    description: 'Professional cuts and styling services',
    imageUrl: '/images/others.avif',
    services: [
      {
        id: 'womens-haircut',
        name: 'Women\'s Haircut',
        description: 'A customized haircut to fit your individual style and preferences.\n(Blow dry not included)',
        price: 40,
        duration: '1 hour',
        category: 'haircuts'
      },
      {
        id: 'womens-haircut-blowdry',
        name: 'Women\'s Haircut & Blow-Dry',
        description: 'A customized haircut designed by your stylist to fit your individual style and preferences, includes professional blow dry and style.',
        price: 55,
        duration: '1.5 hours',
        category: 'haircuts'
      },
      {
        id: 'womens-blowdry',
        name: 'Women\'s Blow-Dry',
        description: 'Professional styling and finishing service using a blow dryer and professional styling brush.',
        price: 45,
        duration: '45 mins',
        category: 'haircuts'
      },
      {
        id: 'womens-styling-iron',
        name: 'Women\'s Styling With Flat-Curling Iron',
        description: 'Women\'s blow dry and styling with a flat/curling iron to straighten, curl, flip, waves and add volume to the hair to create versatile styles for different hair types.',
        price: 50,
        duration: '1 hour',
        category: 'haircuts'
      },
      {
        id: 'womens-haircut-iron',
        name: 'Women\'s Haircut With Flat-Curling Iron',
        description: 'A customized haircut designed by your stylist to fit your individual style and preferences, includes professional blow dry and style.',
        price: 65,
        duration: '1.5 hours',
        category: 'haircuts'
      },
      {
        id: 'childs-haircut',
        name: 'Child\'s Haircut',
        description: 'A customized children\'s haircut designed by your stylist to fit your individual style and preferences.',
        price: 25,
        duration: '30 mins',
        category: 'haircuts'
      },
      {
        id: 'childs-hairstyle',
        name: 'Child\'s Hairstyle',
        description: 'Professional styling service for children',
        price: 30,
        duration: '30 mins',
        category: 'haircuts'
      },
      {
        id: 'childs-haircut-style',
        name: 'Child\'s Haircut and Style',
        description: 'A customized children\'s haircut designed by your stylist to fit your individual style and preferences, includes professional blow dry and style.',
        price: 35,
        duration: '1 hour',
        category: 'haircuts'
      },
      {
        id: 'tinsel',
        name: 'Tinsel',
        description: 'Elevate your style with 10 strands of hand-tied tinsel, each one a radiant accent, weaving a touch of festive glamour into your hair for a dazzling and personalized sparkle.',
        price: 15,
        duration: '30 mins',
        category: 'haircuts'
      },
      {
        id: 'special-occasions',
        name: 'Special Occasions / Up-Dos',
        description: 'An updo is a hairstyle that involves arranging the hair in a way that it is off the shoulders and pinned or styled in a particular way. It is a popular choice for special occasions such as weddings, proms, and formal events. An updo can be simple or elaborate and can be customized to suit the individual\'s hair type, face shape, and personal style. Examples of updos include bun, chignon, French twist, and braided hairstyles.',
        price: 85,
        duration: '1 hour',
        category: 'haircuts'
      },
      {
        id: 'bridal-updo',
        name: 'Bridal Up-do',
        description: 'A bridal updo is an elegant hairstyle worn by a bride on her wedding day, typically styled off the shoulders and pinned in a sophisticated way. It can range from simple to elaborate and often adorned with accessories. It is typically done by professional hairstylist.',
        price: 120,
        duration: '1.5 hours',
        category: 'haircuts'
      },
      {
        id: 'mens-haircut',
        name: 'Men\'s Haircut',
        description: 'Our men\'s haircut service offers a rejuvenating wash and a stylish finish, ensuring you leave with a refreshed and polished look.',
        price: 30,
        duration: '45 mins',
        category: 'haircuts'
      }
    ]
  },
  {
    id: 'hair-color',
    name: 'Hair Color',
    description: 'Professional color services and treatments',
    imageUrl: '/images/color.avif',
    services: [
      {
        id: 'color-consultation',
        name: 'Consultation',
        description: 'A hair consultation at a salon is just an opportunity to discuss your hair goals before your appointment, whether you have a solid vision or you need some guidance. It\'s really nothing more than a friendly conversation about your hair to ensure that you and your stylist are on the same page. Non-refundable.',
        price: 15,
        duration: '30 mins',
        category: 'hair-color'
      },
      {
        id: 'root-touchup', 
        name: 'Root Touch-up',
        description: 'Root touch up is a hair coloring service that is used to cover gray or regrowth at the roots of the hair. It is typically done as maintenance, after a hair color service, to refresh the color and restore the look of a full head of color. The touch up is done only on the new growth, or roots, and blended with the existing color. This service is usually done in a salon by a professional stylist. Complementary blow dry included in Service.',
        price: 85,
        duration: '1.5 hours',
        category: 'hair-color'
      },
      {
        id: 'full-color',
        name: 'Full Color',
        description: 'Full color is a hair coloring service that covers the entire head of hair, changes the natural color, covers gray or enhances existing color. It\'s done by a stylist using different techniques and can be permanent, semi-permanent or temporary. Blow dry and style included.',
        price: 140,
        duration: '2 hours',
        category: 'hair-color'
      },
      {
        id: 'toner',
        name: 'Toner',
        description: 'A hair toner is a product that helps you correct or personalise your colour. It is used to add natural or more visible tones after a professional color treatment. As a result, it enhances the tonality of your hair.',
        price: 65,
        duration: '1 hour',
        category: 'hair-color'
      },
      {
        id: 'full-balayage',
        name: 'Full Balayage',
        description: 'Balayage is a hair coloring technique that involves painting the color onto the hair in a sweeping motion, rather than using foils or a cap. This creates a more natural-looking, graduated effect, with the color appearing more concentrated at the roots and gradually getting lighter towards the ends. This technique is often used to create a more natural-looking transition between hair color, and can be used with a variety of shades and tones, including highlights and lowlights. Styling included.',
        price: 280,
        duration: '3 hours',
        category: 'hair-color'
      },
      {
        id: 'partial-balayage',
        name: 'Partial Balayage',
        description: 'Balayage is a hair coloring technique that involves painting the color onto the hair in a sweeping motion, rather than using foils or a cap. This creates a more natural-looking, graduated effect, with the color appearing more concentrated at the roots and gradually getting lighter towards the ends. This technique is often used to create a more natural-looking transition between hair color, and can be used with a variety of shades and tones, including highlights and lowlights. Styling included.',
        price: 240,
        duration: '2.5 hours',
        category: 'hair-color'
      },
      {
        id: 'full-babylights',
        name: 'Full Babylights',
        description: 'Babylights are very delicate, white-blonde highlights created using a very fine color technique to mimic that blonde hue achieved if your hair is naturally lightened in the sun. Blow dry and Style included.',
        price: 300,
        duration: '3 hours',
        category: 'hair-color'
      },
      {
        id: 'partial-babylights',
        name: 'Partial Babylights',
        description: 'Partial Babylights are very delicate, white-blonde highlights created using a very fine color technique to mimic that blonde hue achieved if your hair is naturally lightened in the sun on the face frame and crown area. Blow dry and Style included.',
        price: 260,
        duration: '2.5 hours',
        category: 'hair-color'
      },
      {
        id: 'highlights-lowlights',
        name: 'Highlights/Lowlights',
        description: 'Hair highlighting/lowlighting is changing a person\'s hair color, using lightener or haircolor to lift the level or brightness of hair strands. There are four basic types of highlights: foil highlights, hair painting, frosting, and chunking.',
        price: 200,
        duration: '2.5 hours',
        category: 'hair-color'
      },
      {
        id: 'partial-highlights',
        name: 'Partial Highlights',
        description: 'Hair highlighting/lowlighting is changing a person\'s hair color, using lightener or haircolor to lift the level or brightness of hair strands. There are four basic types of highlights: foil highlights, hair painting, frosting, and chunking.',
        price: 150,
        duration: '2 hours',
        category: 'hair-color'
      },
      {
        id: 'full-bleach',
        name: 'Full Bleach',
        description: 'A full head of bleach involves lightening all your hair using a bleach or lightening product. Whether you choose blonde, copper, or a fantasy color, this process removes natural pigment, leaving a blank canvas for the desired shade. Blondes are classic and versatile, copper adds warmth, while fantasy colors offer a bold, creative look. Always consider your skin tone and maintenance preferences when selecting a color.',
        price: 350,
        duration: '3 hours',
        category: 'hair-color'
      },
      {
        id: 'color-correction',
        name: 'Color Correction',
        description: 'Color correction is a hair service that involves adjusting the color of your hair to achieve the desired shade or correct any unwanted tones. It may involve removing unwanted hues, balancing color, blending roots, or creating a new shade altogether. The goal of color correction is to leave you with hair that looks healthy, vibrant, and natural.',
        price: 300,
        duration: '3 hours',
        category: 'hair-color'
      }
    ]
  },
  {
    id: 'treatments',
    name: 'Brazilian Blowout & Keratin',
    description: 'Professional smoothing and treatment services',
    imageUrl: '/images/brazilian.avif',
    services: [
      {
        id: 'brazilian-blowout',
        name: 'Brazilian Blowout',
        description: 'Smooths and seals cuticle, improving overall hair health • Fully customizable keep curl wave or get smoothies results • Eliminates frizz for up to 12 weeks • Cut styling time in half • No line of demarcation with new growth',
        price: 200,
        duration: '2.5 hours',
        category: 'treatments'
      },
      {
        id: 'brazilian-blowout-express',
        name: 'Brazilian Blowout Express',
        description: 'Brazilian Blowout Express improves the condition of the hair by creating a protective protein layer around the hair shaft to eliminate frizz and smooth the cuticle for 4 weeks.',
        price: 90,
        duration: '1.5 hours',
        category: 'treatments'
      },
      {
        id: 'uberliss-keratin',
        name: 'Überliss Keratin Treatment',
        description: 'Überliss smoothing treatment is a 2-step system which guarantees immediate and superior results. Smooth and uniform hair via Überliss\' exclusive Triple Blend technology consisting of keratin, cysteine, and buriti extracts. Proven volume reduction. All Überliss products are formulated without formaldehyde. Conditions the natural texture of hair, bringing out incredible softness and shine. Compatible with other chemical processes. The Überliss treatment results can last up to 4 months.',
        price: 250,
        duration: '3 hours',
        category: 'treatments'
      },
      {
        id: 'brazilian-blowout-rewind',
        name: 'Brazilian Blowout Rewind',
        description: '• Anti-aging reparative service • instantly restores the look + feel of younger hair • corrects, + prevents structural and external damage',
        price: 50,
        duration: '1 hour',
        category: 'treatments'
      },
      {
        id: 'botoxrenew',
        name: 'BOTOXRENEW Hair Volumizing Treatment',
        description: 'The newest and most advanced in hair botox with vegetable capillary botox and low molecular weight hyaluronic acid. Rich in antioxidants, vitamin A, E, D, B5, and K, in addition to our exclusive proprietary blend of natural vegetable keratin protein. It has an adaptogenic synergy that works with all hair types. Provides 30% internal filling in the strand to give body, texture, volume, rejuvenation, shine, strengthens the strand, reduces loss, and stimulates healthy growth.',
        price: 175,
        duration: '2 hours',
        category: 'treatments'
      },
      {
        id: 'keratin-cocktail',
        name: 'Keratin 4 Product Cocktail',
        description: 'This treatment quickly restores over-processed hair.',
        price: 120,
        duration: '1.5 hours',
        category: 'treatments'
      },
      {
        id: 'hair-loss-prevention',
        name: 'Hair Loss Prevention Treatment',
        description: 'This advanced formula from DINOR Professional is designed to stimulate natural hair, regrowth, and prevent loss. This treatment is free from harsh chemicals.',
        price: 70,
        duration: '1 hour',
        category: 'treatments'
      },
      {
        id: 'kerital-botoxrenew',
        name: 'Kerital™ BotoxRenew Anti-Yellow Volume Reducer',
        description: 'Botox Renew Anti-Yellow is rich in vegetable capillary botox, hydrolyzed hyaluronic acid, vitamin C, omega 3, 6, 9 to provide vitality, plus our exclusive proprietary blend of natural vegetable keratin protein. Suitable for all hair types. Rejuvenates, nourishes, strengthens, restores, leaves an impressive shine, and restructures hair damaged by chemical over-processing, while controlling frizz and restructures hair damaged by chemical over-processing, while controlling frizz and reducing volume',
        price: 175,
        duration: '2 hours',
        category: 'treatments'
      },
      {
        id: 'mirror-effect',
        name: 'Mirror Effect Treatment',
        description: 'With this treatment, you can nourish, strengthen, restore, tame unmanageable hair, reduce texture, and give that mirror effect shine and softness.',
        price: 120,
        duration: '1.5 hours',
        category: 'treatments'
      },
      {
        id: 'keroplastia',
        name: 'KeroPlastia™ Straightening Treatment',
        description: 'KEROPLASTIA™ BY DINOR PROFESSIONAL is a hair straightening treatment with a revolutionary new method to repair, straighten and tone hair in a single process, with an amazing effect. It is made for all types of hair. It can be applied the same day as a coloration, color extraction, or with any bleaching process. It repairs and strengthens hair from the inside out. The result will be healthy, straight and easy manageable hair. This product is formaldehyde, sulfate and parabens free.',
        price: 195,
        duration: '2.5 hours',
        category: 'treatments'
      }
    ]
  },
  {
    id: 'makeup',
    name: 'Makeup',
    description: 'Professional makeup services for any occasion',
    imageUrl: '/images/makeup.avif',
    services: [
      {
        id: 'eye-makeup',
        name: 'Eye Makeup',
        description: 'Professional eye makeup application',
        price: 35,
        duration: '30 mins',
        category: 'makeup'
      },
      {
        id: 'full-makeup',
        name: 'Full Makeup Application',
        description: 'A full makeup application involves , applying primer, foundation, concealer, powder, contouring, blush, eyeshadow, eyeliner, mascara, false eyelashes, filled in eyebrows, and lipstick or lip gloss.',
        price: 75,
        duration: '1 hour',
        category: 'makeup'
      },
      {
        id: 'bridal-makeup',
        name: 'Bridal Makeup',
        description: 'Bridal makeup is a special type of makeup that is applied on a bride to enhance her natural beauty and make her look stunning on her wedding day. It typically includes foundation, concealer, powder, eye makeup, lips, cheeks, and false lashes. The goal of bridal makeup is to create a flawless, radiant, and long-lasting look that complements the bride\'s dress, hairstyle, and overall aesthetic.',
        price: 120,
        duration: '1.5 hours',
        category: 'makeup'
      }
    ]
  },
  {
    id: 'threading',
    name: 'Threading',
    description: 'Professional threading services',
    imageUrl: '/images/threading.avif',
    services: [
      {
        id: 'upper-lip',
        name: 'Upper Lip',
        description: 'Professional upper lip threading service',
        price: 10,
        duration: '15 mins',
        category: 'threading'
      },
      {
        id: 'eyebrows',
        name: 'Eyebrows',
        description: 'Professional eyebrow threading service',
        price: 20,
        duration: '20 mins',
        category: 'threading'
      },
      {
        id: 'full-face',
        name: 'Full face',
        description: 'Complete facial threading service',
        price: 40,
        duration: '45 mins',
        category: 'threading'
      }
    ]
  },
  {
    id: 'lash-brows',
    name: 'Lash & Brows',
    description: 'Professional lash and brow enhancement services',
    imageUrl: '/images/lash.avif',
    services: [
      {
        id: 'brow-lamination',
        name: 'Brow Lamination',
        description: 'Eyebrow lamination is a beauty treatment that involves chemically setting eyebrow hairs in place, resulting in a groomed and fuller appearance that lasts for weeks.',
        price: 50,
        duration: '45 mins',
        category: 'lash-brows'
      },
      {
        id: 'lash-lift',
        name: 'Lash Lift',
        description: 'A lash lift is a cosmetic procedure that curls and lifts your natural eyelashes, enhancing their length and appearance. It involves applying a lifting solution to your lashes and setting them in an upward position, creating a more open and youthful look. The results can last for several weeks, giving you beautifully curled lashes without the need for extensions or daily mascara application.',
        price: 50,
        duration: '45 mins',
        category: 'lash-brows'
      },
      {
        id: 'henna-brow-tint',
        name: 'Henna Brow Tint',
        description: 'Professional henna brow tinting service',
        price: 30,
        duration: '30 mins',
        category: 'lash-brows'
      },
      {
        id: 'brow-lamination-package',
        name: 'Brow Lamination, Henna & Brow design',
        description: 'Experience the ultimate eyebrow transformation with our all-inclusive package, combining eyebrow lamination, henna application, and expert eyebrow design. Achieve fuller, well-groomed brows with eyebrow lamination, add depth and color with henna tinting, and perfect the shape with precise eyebrow design. Walk away with stunning, beautifully framed eyebrows that enhance your natural beauty.',
        price: 115,
        duration: '1.5 hours',
        category: 'lash-brows'
      }
    ]
  },
  {
    id: 'waxing',
    name: 'Waxing',
    description: 'Professional waxing services',
    imageUrl: '/images/wax.avif',
    services: [
      {
        id: 'half-leg-wax',
        name: 'Half Leg Wax',
        description: 'A half leg wax typically eliminates hair from either just above the knees to the ankles, or from the thighs to above the knees (front and back)',
        price: 0,
        duration: '30 mins',
        category: 'waxing'
      },
      {
        id: 'half-arm-wax',
        name: 'Half Arm Wax',
        description: 'A half arm wax is the perfect way to leave your arms looking and feeling fresh and smooth, from the elbow to the wrist',
        price: 45,
        duration: '30 mins',
        category: 'waxing'
      },
      {
        id: 'brow-shaping-wax',
        name: 'Brow Shaping Wax',
        description: 'Brow shaping waxing is a method of hair removal that uses warm wax to remove unwanted hair from the brow area to shape and define the brows. A strip of cloth or paper is pressed onto the wax and quickly removed, pulling the hair out of the follicles. This technique can be used to achieve a variety of brow shapes and should be done by a professional to avoid any skin irritation or injury.',
        price: 25,
        duration: '20 mins',
        category: 'waxing'
      },
      {
        id: 'brow-maintenance-wax',
        name: 'Brow Maintenance Wax',
        description: 'Eyebrow wax maintenance is the regular process of removing unwanted hair from the eyebrows through waxing to keep the shape and appearance of the brows neat and well-groomed. The procedure is done by a professional and the frequency of maintenance is usually every 4-6 weeks. The process will involve cleaning the brow area, applying warm wax, placing a strip of cloth or paper on top, removing it quickly, and tweezing any remaining stray hair.',
        price: 20,
        duration: '15 mins',
        category: 'waxing'
      },
      {
        id: 'full-face-wax',
        name: 'Full Face Wax',
        description: 'A full face wax removes unwanted hair from all areas of the face. It\'s done by a professional, typically using warm wax and a strip. It can help achieve a smooth, hair-free look. It\'s usually followed by a soothing lotion or oil to reduce redness and irritation. The frequency of the maintenance will depend on each individual\'s hair growth.',
        price: 60,
        duration: '45 mins',
        category: 'waxing'
      },
      {
        id: 'upper-lip-wax',
        name: 'Upper Lip Wax',
        description: 'Lip waxing is a hair removal procedure that removes unwanted hair from the upper lip area. It\'s typically done by applying warm wax, pressing a strip on top, and quickly removing it, pulling the hair out of the follicles. It can help achieve a smooth, hair-free look, with a soothing lotion or oil applied after to reduce redness and irritation. The frequency of maintenance will depend on each individual\'s hair growth.',
        price: 10,
        duration: '15 mins',
        category: 'waxing'
      },
      {
        id: 'full-arm-wax',
        name: 'Full Arm Wax',
        description: 'A Full Arm wax is the perfect way to leave your arms looking and feeling fresh and smooth, from the tops of your shoulders to the tips of your manicured fingers',
        price: 55,
        duration: '45 mins',
        category: 'waxing'
      },
      {
        id: 'underarms-wax',
        name: 'Underarms Wax',
        description: 'Underarm waxing is a hair removal procedure that removes unwanted hair from the underarm area. It\'s typically done by applying warm wax, pressing a strip on top, and quickly removing it, pulling the hair out of the follicles. It can help achieve a smooth, hair-free look, with a soothing lotion or oil applied after to reduce redness and irritation. The frequency of maintenance will depend on each individual\'s hair growth.',
        price: 25,
        duration: '20 mins',
        category: 'waxing'
      }
    ]
  },
  {
    id: 'extensions',
    name: 'Hair Extensions',
    description: 'Professional hair extension services',
    imageUrl: '/images/extensions.avif',
    services: [
      {
        id: 'extensions-consultation',
        name: 'Hair Extensions Consultation',
        description: 'A hair extensions consultation is a meeting to discuss the desired look, hair type, and extension options, ensuring the best choice for a client\'s needs.',
        price: 35,
        duration: '30 mins',
        category: 'extensions'
      },
      {
        id: 'tape-in-extensions',
        name: 'Tape-in',
        description: 'Tape-in extensions are a semi-permanent hair extension method where thin adhesive wefts are attached to your natural hair, adding length and volume without causing damage. They provide a seamless and natural appearance and are easily maintainable with proper care.',
        price: 0,
        duration: '2 hours',
        category: 'extensions'
      },
      {
        id: 'beaded-extensions',
        name: 'Beaded',
        description: 'Beaded extensions, also known as micro bead or I-tip extensions, involve attaching small wefts of hair to natural strands using tiny beads or cylinders. This method provides a secure and flexible way to add length and volume to your hair without the need for heat or adhesive. Beaded extensions offer a natural look and are easily adjustable for a personalized style.',
        price: 0,
        duration: '3 hours',
        category: 'extensions'
      },
      {
        id: 'weft-extensions',
        name: 'Weft',
        description: 'Weft extensions are bundles of hair sewn together at the top, which can be attached to your natural hair using various methods such as sewing, braiding, or tape. They offer a quick and efficient way to add volume and length to your hair, making them a popular choice for hair extensions. Weft extensions provide versatility in styling and can be customized to match your natural hair color and texture.',
        price: 0,
        duration: '2.5 hours',
        category: 'extensions'
      },
      {
        id: 'fusion-extensions',
        name: 'Fusion',
        description: 'Fusion extensions, also called keratin bond extensions, are a method where individual strands of hair are fused to your natural hair using a keratin adhesive. This technique offers a long-lasting and seamless integration, providing added length and volume with a natural appearance. Fusion extensions require professional application and careful maintenance for optimal results.',
        price: 0,
        duration: '4 hours',
        category: 'extensions'
      },
      {
        id: 'flat-tip-extensions',
        name: 'Flat tip',
        description: 'Flat tip extensions are a type of hair extension that features flat, square-shaped tips designed to lie comfortably against your scalp. They are typically attached using a micro-ring or tape-in method, providing a discreet and natural look. Flat tip extensions offer versatility in styling and are suitable for adding both length and volume to your hair.',
        price: 0,
        duration: '3 hours',
        category: 'extensions'
      }
    ]
  },
  {
    id: 'nails',
    name: 'Nail Care',
    description: 'Professional nail care and enhancement services',
    imageUrl: '/images/nails.avif',
    services: [
      {
        id: 'shellac-nails',
        name: 'Shellac Nails',
        description: 'Shellac nail service is a popular manicure treatment that combines the durability of gel nails with the versatility of traditional nail polish. It involves applying multiple layers of a special hybrid polish that is cured under a UV or LED lamp, resulting in a long-lasting, chip-resistant, and glossy finish that can last for up to two weeks.',
        price: 20,
        duration: '45 mins',
        category: 'nails'
      },
      {
        id: 'full-set-acrylic',
        name: 'Full Set Acrylic Nails',
        description: 'A full acrylic set is a nail enhancement service that involves the application of acrylic powder and liquid to create durable and long-lasting artificial nails. Nail technicians sculpt and shape the acrylic material to the desired length and style, providing a strong and customizable extension to natural nails.',
        price: 35,
        duration: '1 hour',
        category: 'nails'
      },
      {
        id: 'acrylic-fill',
        name: 'Acrylic Fill',
        description: 'An acrylic nail fill service involves the maintenance and rejuvenation of existing acrylic nails by filling in the regrowth at the base with fresh acrylic material, ensuring the nails maintain their appearance and structural integrity.',
        price: 35,
        duration: '45 mins',
        category: 'nails'
      },
      {
        id: 'nails-removal',
        name: 'Nails Removal',
        description: 'A nail gel or acrylic removal service is a process in which professional technicians use specific solvents and techniques to safely and gently dissolve and remove gel or acrylic nail enhancements, allowing for the natural nails to be exposed and restored.',
        price: 15,
        duration: '30 mins',
        category: 'nails'
      },
      {
        id: 'classic-pedicure',
        name: 'Classic Pedicure',
        description: 'Our Classic Pedicure offers a rejuvenating and luxurious foot treatment that includes nail shaping, cuticle care, polish change, and an indulgent foot soak, leaving your feet feeling refreshed and looking beautiful.',
        price: 30,
        duration: '45 mins',
        category: 'nails'
      },
      {
        id: 'spa-pedicure',
        name: 'Spa Pedicure',
        description: 'Indulge in the ultimate pampering experience with our Spa Pedicure service. Relax as our expert technicians provide a luxurious foot soak, exfoliation, nail shaping, cuticle care, massage, and choice of regular or gel polish for perfectly groomed and revitalized feet.',
        price: 40,
        duration: '1 hour',
        category: 'nails'
      },
      {
        id: 'polish-change-feet',
        name: 'Polish Change - Feet',
        description: 'Looking for a quick and refreshing change? Our Polish Change - Feet service will give your feet a brand new look with a fresh coat of polish, leaving them looking polished and vibrant. Whether you\'re preparing for a special occasion or just want to treat yourself, our skilled technicians will ensure that your feet are pampered and polished to perfection.',
        price: 15,
        duration: '20 mins',
        category: 'nails'
      },
      {
        id: 'deluxe-pedicure',
        name: 'Deluxe Pedicure',
        description: 'The Deluxe Pedicure service offers a luxurious and pampering experience for your feet. Enjoy an indulgent treatment that includes a soothing foot soak, nail shaping and cuticle care, exfoliation, massage, and a polish of your choice. Let your feet be rejuvenated and beautifully transformed with our Deluxe Pedicure.',
        price: 50,
        duration: '1.25 hours',
        category: 'nails'
      },
      {
        id: 'manicure-pedicure',
        name: 'Manicure and Pedicure',
        description: 'Our Manicure and Pedicure services are designed to pamper and groom your hands and feet, leaving them looking and feeling their best. Our team of skilled professionals will ensure that your nails are perfectly shaped, polished, and cared for, while our relaxing treatments will leave you feeling refreshed and rejuvenated.',
        price: 50,
        duration: '1.5 hours',
        category: 'nails'
      },
      {
        id: 'full-set-acrylic-feet',
        name: 'Full Set Acrylic - Feet',
        description: 'Our Full Set Acrylic - Feet service offers a flawless and long-lasting solution for enhancing the beauty of your feet. With expert application and a wide range of colors to choose from, our skilled technicians will ensure that your nails look stunning and polished.',
        price: 50,
        duration: '1 hour',
        category: 'nails'
      },
      {
        id: 'full-set-acrylic-hands-feet',
        name: 'Full Set Acrylic - Hands and Feet',
        description: 'Our Full Set Acrylic service for both hands and feet provides a long-lasting and flawless application of acrylic nails, leaving you with beautifully manicured hands and feet that are sure to turn heads. Transform your nails with our professional technicians who will expertly apply and shape the acrylic nails to your desired length and style, giving you the confidence to flaunt your perfectly polished look.',
        price: 75,
        duration: '2 hours',
        category: 'nails'
      }
    ]
  },
  {
    id: 'barbering',
    name: 'Barbering',
    description: 'Professional barbering services',
    imageUrl: '/images/barbering.avif',
    services: [
      {
        id: 'beard-trim',
        name: 'Beard Trim',
        description: 'Our Beard Trim service offers expert grooming and trimming for a perfectly styled and well-maintained beard.',
        price: 20,
        duration: '30 mins',
        category: 'barbering'
      }
    ]
  }
];