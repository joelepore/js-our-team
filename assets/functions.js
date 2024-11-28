const createCardElement = (cardTemplate, teamMember) => {
  // Clono la card di template con il metodo cloneNode() in quanto non e' possibile clonare un nodo con spread operator
  const newCard = cardTemplate.cloneNode(true);
  const { name, role, email, img } = teamMember;

  newCard.querySelector('h3').innerText = name;
  newCard.querySelector('p').innerText = role;
  newCard.querySelector('a').innerText = email;
  newCard.querySelector('img').src = `assets/${img}`;

  return newCard;
}

const appendCards = (rootElement, teamMembers, cardTemplate) => {
  for (let member of teamMembers) {
    rootElement.append(createCardElement(cardTemplate, member))
  }
}

const renderCards = (rootElement, teamMembers, cardTemplate) => {
  rootElement.innerHTML = '';
  appendCards(rootElement, teamMembers, cardTemplate);
}