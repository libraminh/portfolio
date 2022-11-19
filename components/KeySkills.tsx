import { Heading3 } from './Heading3';

interface Props {}

const KeySkills = (props: Props) => {
  return (
    <section className="mb-12">
      <Heading3>Key Skills</Heading3>

      <div className="prose-sm md:prose-base text-gray-600 dark:text-white">
        <ul className="list-disc !mt-0">
          <li>HTML5, CSS3, SASS/SCSS, JavaScript, ES6, Promise, Tailwindcss</li>

          <li>
            ReactJS with Redux, Redux-Thunk, Redux Toolkit, Mobx, Hooks,
            React-Query
          </li>

          <li>VueJS with Vuex, Vue-Router</li>

          <li>MongoDB, Firebase, Node JS, NestJS, Express, Passport & JWT</li>
          <li>Webpack, Gulp, Yeoman</li>
          <li>Animation with ScrollMagic and GSAP</li>
          <li>Git, Github, SourceTree</li>
          <li>Hubspot, Email template</li>
          <li>Converting PSD to HTML/CSS template</li>
          <li>Building responsive websites.</li>
          <li>Building template for ThemeForest.</li>
          <li>Building GTA5 Fivem Server with Lua.</li>
        </ul>
      </div>
    </section>
  );
};

export default KeySkills;
