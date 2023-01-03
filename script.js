function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light'); //Avalia se existe a class 'light'. Se existir ela é redirada. Se não existir, ela é adicionada.
}