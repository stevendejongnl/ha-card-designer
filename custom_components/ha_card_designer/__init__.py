from __future__ import annotations

from homeassistant.core import HomeAssistant
from homeassistant.helpers.typing import ConfigType
from homeassistant.components.frontend import async_register_built_in_panel
from homeassistant.components.http import StaticPathConfig

from .const import DOMAIN, NAME, PANEL_URL, PANEL_ELEMENT, SIDEBAR_ICON, VERSION


async def async_setup(hass: HomeAssistant, config: ConfigType) -> bool:
    hass.data.setdefault(DOMAIN, {})
    return True


async def async_setup_entry(hass, config_entry) -> bool:
    await _register_panel(hass)
    return True


async def async_unload_entry(hass, config_entry) -> bool:
    return True


async def _register_panel(hass: HomeAssistant) -> None:
    js_path = hass.config.path(f"custom_components/{DOMAIN}/assets/ha-card-designer-panel.js")

    await hass.http.async_register_static_paths([
        StaticPathConfig(PANEL_URL, js_path, False),
    ])

    async_register_built_in_panel(
        hass,
        component_name="custom",
        sidebar_title=NAME,
        sidebar_icon=SIDEBAR_ICON,
        frontend_url_path="card-designer",
        require_admin=True,
        config={
            "_panel_custom": {
                "name": PANEL_ELEMENT,
                "module_url": f"{PANEL_URL}?v={VERSION}",
                "embed_iframe": False,
            },
            "version": VERSION,
        },
    )
