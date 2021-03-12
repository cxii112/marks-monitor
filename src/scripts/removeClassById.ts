export const removeClassById = (targetId: string, value: string) => {
    let target: HTMLElement | null = document.getElementById(targetId);
    if (target) target.classList.remove(value)
  }