const D = document;

async function setDataNasa(data) {
  if (!data) {
    return;
  }
  const response = await data;
  console.log(response);
  D.getElementById("title").textContent = response.title;
  D.getElementById("date").textContent = response.date;
  D.getElementById("explanation").textContent = response.explanation;
  D.getElementById("image").src = response.hdurl;
}

export default setDataNasa;
