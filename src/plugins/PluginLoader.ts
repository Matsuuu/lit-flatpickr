import { LitFlatpickr } from '../LitFlatpickr';

export async function loadPlugins(instance: LitFlatpickr, options: any) {
  if (instance.weekSelect) {
    // @ts-ignore
    const weekSelectPluginImport = await import('flatpickr/dist/esm/plugins/weekSelect/weekSelect.js');
    console.log(weekSelectPluginImport);
    const weekSelectPlugin = weekSelectPluginImport.default;
    options = { ...options, plugins: [...options.plugins, weekSelectPlugin()] };
  }

  return options;
}
