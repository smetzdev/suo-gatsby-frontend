import faker from "faker"

export const createFakeHTML = () => {
  return `
      <h2>${faker.random.words()}</h2>
      <p>${faker.lorem.paragraphs()}<p>
      <p>${faker.lorem.paragraphs()}<p>
      <h2>${faker.random.words()}</h2>
      <p>${faker.lorem.paragraph()}<p>
      <ul>
        <li>Raw list element</li>
        <li><a href="#">List element with link</a></li>
      </ul>
      <h2>${faker.random.words()}</h2>
      <h3>Link below</h3>
      <p>Lorem, ipsum dolor sit amet consectetur <a href="#">Link</a> elit. Eum, dolor?<p>
    `
}
