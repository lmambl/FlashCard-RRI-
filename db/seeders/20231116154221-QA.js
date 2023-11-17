'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
          question: 'Как называется фрукт, который часто ассоциируется с компанией Apple? ',
          answer: 'ЯБЛОКО',
          categotyID: 2, 
          url: 'https://www.iphones.ru/wp-content/uploads/2012/04/appleinc_36.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Вставьте пропущенное слово: ____ от яблони недалеко падает?',
          answer: 'ЯБЛОКО',
          categotyID: 2, 
          url: 'https://o.quizlet.com/Tm-uoFd2TKLU6CKO-3aylA.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Какой фрукт является символом знания в библейской истории Адама и Евы?',
          answer: 'ЯБЛОКО',
          categotyID: 2, 
          url: 'https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTjVlED5mFPF2IXmHUwNqGfC0ytLf-EgAm3KjdmxAyna6nH283vUR9sjqMa5Xskw39N',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Один из самых популярных фруктов в Росиии?',
          answer: 'ЯБЛОКО',
          categotyID: 2, 
          url: 'https://media.istockphoto.com/id/898671450/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D1%83%D1%87%D0%BE%D0%BA-%D1%81%D0%BF%D0%B5%D0%BB%D1%8B%D1%85-%D0%B1%D0%B0%D0%BD%D0%B0%D0%BD%D0%BE%D0%B2-%D0%B8-%D1%8F%D0%B1%D0%BB%D0%BE%D0%BA-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D1%85-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5.jpg?s=1024x1024&w=is&k=20&c=UkmBDEZHd34ZNtc5ThkLH41YNWheJKz-3jN7ksrhTyk=',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Что изображено на картинке?',
          answer: 'ЯБЛОКО',
          categotyID: 2, 
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Red_delicious_and_cross_section.jpg/1200px-Red_delicious_and_cross_section.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Да, это знаменитый мемный дядька, который не может пройти мимо заманчивых вещей. Откуда же он?',
          answer: 'ВЛАСТЕЛИН КОЛЕЦ',
          categotyID: 1, 
          url: 'https://cdn-m.sport24.ru/m/7f17/917f/001b/4b5c/9d8f/1921/7c84/d6ab/400_10000_max.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Едва ли не в каждом фильме Ди Каприо найдётся легендарный кадр, покоривший интернет. Помните, где Лео был таким помятым и недовольным?',
          answer: 'ОСТРОВ ПРОКЛЯТЫХ',
          categotyID: 1, 
          url: 'https://n1s1.hsmedia.ru/6d/99/e5/6d99e50e1110d748341ec8e7b0fa794a/728x608_1_1a9edb34004742f34dde85edefd5d3a3@900x752_0xavyk0Pl9_2694345260141831822.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Как началась вторая неделя? Комментарии излишни... Как назывался фильм?',
          answer: 'СИЯНИЕ',
          categotyID: 1, 
          url: 'https://st.peopletalk.ru/wp-content/uploads/2020/04/og_og_1575312935212479746.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'А как ощущает себя первая фаза? Откуда мем?',
          answer: 'ГРЯЗЬ',
          categotyID: 1, 
          url: 'https://user72902.clients-cdnnow.ru/localStorage/news/7c/3d/3e/4a/7c3d3e4a_resizedScaled_1020to433.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Что за сериал?',
          answer: 'ПАЦАНЫ',
          categotyID: 1, 
          url: 'https://memasno.ru/uploads/posts/2022-07/gifki-s-houmlenderom-chto-za-memy-iz-seriala-pacany-1.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Наконечник шнурка, металлический или пластиковый.',
          answer: 'ЭГЛЕТ',
          categotyID: 3, 
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Shoelaces_01.jpg/1200px-Shoelaces_01.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Узкая ленточка, которую некоторые книгопроизводители вклеивают в качестве закладки.',
          answer: 'ЛЯССЕ',
          categotyID: 3, 
          url: 'https://poligraftorg.ru/assets/pages/perepletnye-materialy/lyasse8.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Кругляш из металла или пластика на отверстиях для шнурков в обуви.',
          answer: 'ЛЮВЕРС',
          categotyID: 3, 
          url: 'https://n1s1.hsmedia.ru/31/46/3b/31463b460117b01be830d85da8b8fb47/728x504_1_9e1efd1edae756709fad832adf88b05d@1200x830_0xac120003_10967717521580143486.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Он же костер, он же бирмат. Подставка под кружку, обычно пивную.',
          answer: 'БИРДЕКЕЛЬ',
          categotyID: 3, 
          url: 'https://o.quizlet.com/Tm-uoFd2TKLU6CKO-3aylA.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Та часть ложки, которой, будучи трезвым, ты зачерпываешь суп. На картинке под цифрами: 2 - ПЕРЕМЫЧКА, 3 - ДЕРЖАЛО',
          answer: 'ЧЕРПАЛО',
          categotyID: 3, 
          url: 'https://avatars.mds.yandex.net/i?id=660c42a1d3e5878de7fd86a7acbf8a4a-5249145-images-taas-consumers&ref=patents&n=13',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

