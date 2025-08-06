// === Datos de materias ===
const materias = [{ codigo: "2503611", nombre: "Introducción a la ingeniería mecánica", nivel: 1, prerequisitos: [], correquisitos: [] },
  { codigo: "2505134", nombre: "Química general", nivel: 1, prerequisitos: [], correquisitos: [] },
  { codigo: "2536101", nombre: "Descubriendo la física", nivel: 1, prerequisitos: [], correquisitos: [] },
  { codigo: "2537101", nombre: "Vivamos la universidad", nivel: 1, prerequisitos: [], correquisitos: [] },
  { codigo: "2538101", nombre: "Inglés I", nivel: 1, prerequisitos: [], correquisitos: [] },
  { codigo: "2555101", nombre: "Álgebra y trigonometría", nivel: 1, prerequisitos: [], correquisitos: [] },
  { codigo: "2555121", nombre: "Geometría vectorial y analítica", nivel: 1, prerequisitos: [], correquisitos: [] },
  { codigo: "2555131", nombre: "Cálculo diferencial", nivel: 1, prerequisitos: [], correquisitos: [] },

  { codigo: "2503018", nombre: "Algoritmos y programación", nivel: 2, prerequisitos: ["2503611"], correquisitos: [] },
  { codigo: "2503623", nombre: "Ciencia de los materiales I", nivel: 2, prerequisitos: ["2505134"], correquisitos: [] },
  { codigo: "2503625", nombre: "Expresión gráfica", nivel: 2, prerequisitos: ["2503611"], correquisitos: [] },
  { codigo: "2536201", nombre: "Física mecánica", nivel: 2, prerequisitos: ["2536101", "2555121", "2555131"], correquisitos: [] },
  { codigo: "2538201", nombre: "Inglés II", nivel: 2, prerequisitos: ["2538101"], correquisitos: [] },
  { codigo: "2555221", nombre: "Álgebra lineal", nivel: 2, prerequisitos: ["2555101", "2555121"], correquisitos: [] },
  { codigo: "2555231", nombre: "Cálculo integral", nivel: 2, prerequisitos: ["2555101", "2555131"], correquisitos: [] },

  { codigo: "2503631", nombre: "Laboratorio de materiales", nivel: 3, prerequisitos: [], correquisitos: ["2503633"] },
  { codigo: "2503633", nombre: "Ciencia de materiales II", nivel: 3, prerequisitos: ["2503623"], correquisitos: ["2538201"] },
  { codigo: "2503635", nombre: "Dibujo para ingeniería mecánica", nivel: 3, prerequisitos: ["2503625"], correquisitos: [] },
  { codigo: "2503645", nombre: "Ecuaciones diferenciales", nivel: 3, prerequisitos: ["2555231", "2555221", "2536201"], correquisitos: [] },
  { codigo: "2503646", nombre: "Estática", nivel: 3, prerequisitos: ["2536201", "2555231", "2555121"], correquisitos: [] },
  { codigo: "2536311", nombre: "Física de campos", nivel: 3, prerequisitos: ["2536201", "2555231"], correquisitos: [] },
  { codigo: "2538301", nombre: "Inglés III", nivel: 3, prerequisitos: ["2538201"], correquisitos: [] },
  { codigo: "2555331", nombre: "Cálculo vectorial", nivel: 3, prerequisitos: ["2555231", "2555121"], correquisitos: [] },

  { codigo: "2503653", nombre: "Matemáticas especiales", nivel: 4, prerequisitos: ["2555331", "2503645", "2503018"], correquisitos: [] },
  { codigo: "2503663", nombre: "Mecánica de fluidos", nivel: 4, prerequisitos: ["2503645"], correquisitos: [] },
  { codigo: "2503667", nombre: "Mecanizado", nivel: 4, prerequisitos: ["2503633", "2503635", "2503018"], correquisitos: [] },
  { codigo: "2536302", nombre: "Física de ondas", nivel: 4, prerequisitos: ["2536311"], correquisitos: [] },
  { codigo: "2538401", nombre: "Inglés IV", nivel: 4, prerequisitos: ["2538301"], correquisitos: [] },
  { codigo: "2539130", nombre: "Español académico", nivel: 4, prerequisitos: [], correquisitos: [] },

  { codigo: "2503020", nombre: "Métodos numéricos", nivel: 5, prerequisitos: ["2503653"], correquisitos: [] },
  { codigo: "2503642", nombre: "Fundición", nivel: 5, prerequisitos: ["2503633"], correquisitos: [] },
  { codigo: "2503651", nombre: "Electricidad básica", nivel: 5, prerequisitos: ["2536311"], correquisitos: [] },
  { codigo: "2503655", nombre: "Dinámica y mecanismos", nivel: 5, prerequisitos: ["2555331", "2503646"], correquisitos: [] },
  { codigo: "2503665", nombre: "Termodinámica I", nivel: 5, prerequisitos: ["2503645"], correquisitos: [] },
  { codigo: "2536502", nombre: "Laboratorio integrado de física", nivel: 5, prerequisitos: ["2536302", "2536311"], correquisitos: [] },
  { codigo: "2538501", nombre: "Inglés V", nivel: 5, prerequisitos: ["2538401"], correquisitos: [] },

  { codigo: "2503632", nombre: "Conformación", nivel: 6, prerequisitos: ["2503633"], correquisitos: [] },
  { codigo: "2503643", nombre: "Estadística", nivel: 6, prerequisitos: ["2555231"], correquisitos: [] },
  { codigo: "2503652", nombre: "Soldadura", nivel: 6, prerequisitos: ["2503633"], correquisitos: [] },
  { codigo: "2503662", nombre: "Electrónica básica", nivel: 6, prerequisitos: [], correquisitos: ["2503651"] },
  { codigo: "2503666", nombre: "Resistencia de materiales", nivel: 6, prerequisitos: ["2503646", "2503631"], correquisitos: [] },
  { codigo: "2503671", nombre: "Termodinámica II", nivel: 6, prerequisitos: ["2503665"], correquisitos: ["2538401"] },
  { codigo: "2538601", nombre: "Inglés VI", nivel: 6, prerequisitos: ["2538501"], correquisitos: [] },

  { codigo: "2503672", nombre: "Diseño de elementos de máquina", nivel: 7, prerequisitos: ["2503667", "2503655", "2503666"], correquisitos: [] },
  { codigo: "2503679", nombre: "Medición e instrumentación", nivel: 7, prerequisitos: ["2503662", "2503643"], correquisitos: [] },
  { codigo: "2503680", nombre: "Gestión del mantenimiento", nivel: 7, prerequisitos: ["2503643", "2503632"], correquisitos: [] },
  { codigo: "2503683", nombre: "Combustión", nivel: 7, prerequisitos: ["2503671", "2503663"], correquisitos: [] },

  { codigo: "2503682", nombre: "Diseño aplicado", nivel: 8, prerequisitos: ["2503652", "2503672"], correquisitos: [] },
  { codigo: "2503684", nombre: "Transferencia de calor y masa", nivel: 8, prerequisitos: ["2503683", "2503020"], correquisitos: [] },
  { codigo: "2503685", nombre: "Control automático", nivel: 8, prerequisitos: ["2503020"], correquisitos: ["2503679", "2538601"] },
  { codigo: "2517450", nombre: "Cátedra de formación ciudadana y constitucional", nivel: 8, prerequisitos: [], correquisitos: [] },

  { codigo: "2503692", nombre: "Potencia fluida", nivel: 9, prerequisitos: ["2503663", "2503662"], correquisitos: [] },
  { codigo: "2503693", nombre: "Fundamentos de administración", nivel: 9, prerequisitos: ["2503680"], correquisitos: [] },
  { codigo: "2503695", nombre: "Formulación y evaluación de proyectos", nivel: 9, prerequisitos: [], correquisitos: ["2503693"] }
];

// === Renderizar la malla ===
const mallaContainer = document.getElementById("malla");

function renderMalla() {
  mallaContainer.innerHTML = "";
  const niveles = [...new Set(materias.map(m => m.nivel))].sort((a,b) => a-b);

  niveles.forEach(nivel => {
    const contenedor = document.createElement("div");
    contenedor.classList.add("semestre");
    contenedor.innerHTML = `<h2>Nivel ${nivel}</h2>`;

    materias
      .filter(m => m.nivel === nivel)
      .forEach(m => {
        const mat = document.createElement("div");
        mat.classList.add("materia", "bloqueada");
        mat.dataset.codigo = m.codigo;
        mat.innerHTML = `<strong>${m.nombre}</strong><span> [${m.codigo}]</span>`;
        contenedor.appendChild(mat);
      });

    mallaContainer.appendChild(contenedor);
  });
}

function actualizarBloqueos() {
  document.querySelectorAll(".materia").forEach(m => {
    const codigo = m.dataset.codigo;
    const materia = materias.find(mat => mat.codigo === codigo);
    const aprobadas = getMateriasAprobadas();

    const cumplePrerreq = materia.prerequisitos.every(p => aprobadas.includes(p));

    if (cumplePrerreq) {
      m.classList.remove("bloqueada");
    } else {
      m.classList.add("bloqueada");
    }
  });
}

function getMateriasAprobadas() {
  return JSON.parse(localStorage.getItem("materiasAprobadas") || "[]");
}

function setMateriaAprobada(codigo) {
  let aprobadas = getMateriasAprobadas();
  if (!aprobadas.includes(codigo)) {
    aprobadas.push(codigo);
  } else {
    aprobadas = aprobadas.filter(c => c !== codigo);
  }
  localStorage.setItem("materiasAprobadas", JSON.stringify(aprobadas));
  pintarAprobadas();
  actualizarBloqueos();
}

function pintarAprobadas() {
  const aprobadas = getMateriasAprobadas();
  document.querySelectorAll(".materia").forEach(m => {
    const codigo = m.dataset.codigo;
    if (aprobadas.includes(codigo)) {
      m.classList.add("aprobada");
    } else {
      m.classList.remove("aprobada");
    }
  });
}

// === Ejecutar cuando cargue la página ===
document.addEventListener("DOMContentLoaded", () => {
  renderMalla();
  pintarAprobadas();
  actualizarBloqueos();

  document.querySelectorAll(".materia").forEach(m => {
    m.addEventListener("click", () => {
      if (!m.classList.contains("bloqueada")) {
        const codigo = m.dataset.codigo;
        setMateriaAprobada(codigo);
      }
    });
  });
});


