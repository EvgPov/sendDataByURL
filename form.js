const form = document.querySelector("form");
// определяем origin и pathname у страницы-получателя
const urlIndexPage = new URL('result.html', window.location.href);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form); // сохраняем даныые форма
  // определем search-параметры страницы-получателя
  urlIndexPage.searchParams.append("name", formData.get("name"));
  urlIndexPage.searchParams.append("age", formData.get("age"));
  urlIndexPage.searchParams.append("city", formData.get("city"));
  // открываем страницу-получателя данных
  window.location.href = urlIndexPage;
})
