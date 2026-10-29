// Система оповіщення, яку ми розвиваємо на практичних заняттях.

const LEVELS = ['low', 'high'];

export function formatAlert(alert) {
}

export function isUrgent(alert) {
}

export function countUrgent(alerts) {
}

// Виправляємо createAlert, щоб вона повертала рядок оповіщення (наприклад, "[high] Пожежа")
export function createAlert(level, text) {
  return `[${level}] ${text}`;
}

// Наша функція formatShort для Картки 9:
export function formatShort(alert, max) {
  const str = String(alert);
  if (str.length <= max) {
    return alert;
  }
  return str.slice(0, max - 3) + '...';
}