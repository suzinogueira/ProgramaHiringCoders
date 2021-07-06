import HomeSectionOne from '../../components/sections/homeSectionsOne';
import HomeSectionTwo from '../../components/sections/homeSectionsTwo';
import floatImage from '../../components/float/floatImage';


let Home = {
  is_private: false,

  render: async () => {
      let view = `
          <div>
            ${HomeSectionOne}
            ${HomeSectionTwo}
            ${floatImage}
          </div>
      `;

      return view
  },

  after_render: async () => {}
}

export default Home;