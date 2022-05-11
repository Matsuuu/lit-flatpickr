import { LitFlatpickr } from '../LitFlatpickr';

export async function loadPlugins(instance: LitFlatpickr, options: any) {
  if (instance.weekSelect) {
    // @ts-ignore
    const weekSelectPluginImport = await import('flatpickr/dist/esm/plugins/weekSelect/weekSelect.js');
    const weekSelectPlugin = weekSelectPluginImport.default;
    options = {
      ...options,
      plugins: [...options.plugins, weekSelectPlugin()],
      onChange: function () {
        // @ts-ignore
        const weekNumber = this.selectedDates[0] ? this.config.getWeek(this.selectedDates[0]) : null;
        console.log(weekNumber);
        // TODO: Set the weeknumber to the input value
      },
    };
  }

  return options;
}
