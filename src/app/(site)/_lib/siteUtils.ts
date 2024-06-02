export function titleAppend(title?: string) {
  return title ? title + ' | ' + 'Equipoise' : 'Equipoise';
}

export function debounce<F extends(...args: Parameters<F>) => ReturnType<F>>(func: F, ms: number) {
  let timeoutId: ReturnType<typeof setTimeout> | undefined = undefined;
  return (...args: Parameters<F>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), ms);
  };
}
