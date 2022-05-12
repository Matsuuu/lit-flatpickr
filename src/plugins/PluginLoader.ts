import { LitFlatpickr } from '../LitFlatpickr';

const pluginUrlPrefix = 'https://npmcdn.com/flatpickr@4.6.9/dist';

export async function loadPlugins(instance: LitFlatpickr, options: any) {
  if (instance.weekSelect) {
    // @ts-ignore
    const weekSelectPluginImport = await import(pluginUrlPrefix + '/esm/plugins/weekSelect/weekSelect.js');
    const weekSelectPlugin = weekSelectPluginImport.default;
    options = {
      ...options,
      plugins: [...options.plugins, weekSelectPlugin()],
      onChange: function () {
        const weekNumber = this.selectedDates[0] ? this.config.getWeek(this.selectedDates[0]) : null;
        this.input.value = weekNumber;
      },
    };
  }

  if (instance.monthSelect) {
    // @ts-ignore
    const monthSelectPluginImport = await import(pluginUrlPrefix + '/esm/plugins/monthSelect/index.js');
    const monthSelectPlugin = monthSelectPluginImport.default;
    options = {
      ...options,
      plugins: [
        ...options.plugins,
        monthSelectPlugin({
          shorthand: false,
          dateFormat: instance.dateFormat,
          altFormat: instance.altFormat,
        }),
      ],
    };
    const styles = document.createElement('link');
    styles.rel = 'stylesheet';
    styles.href = pluginUrlPrefix + '/plugins/monthSelect/style.css';
    document.head.appendChild(styles);
  }

  return options;
}
