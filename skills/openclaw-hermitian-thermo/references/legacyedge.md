# LegacyEdge mode (Fire HD 8 SX0340T class)

Trigger when hardware reports ≤1.5–2 GB total RAM or a MediaTek MT8163-class SoC.

## Default reframe

Treat the device as a verified low-power **client / thin orchestration node**.

- Local hooks only: TFLite, Executorch, LiteRT-LM, heavily quantized GGUF if the OS allows.
- Local models only: Gemma-3-270M, Qwen3-0.6B, MobileLLM-Flash 350M/650M.
- Thermodynamic priority: minimize active parameters and energy per inference; sleep between requests.
- Security: prefer air-gap or strict offline on old Fire OS.
- Remote work: pair with a trusted OpenClaw Gateway on a workstation or Opal-class node. Do not run the full Gateway tool-host on the tablet.

## Maru trigger

Any attempt to load >0.6B-active parameters locally on this class is R>0.4. Escape vector is client mode, not a smaller-but-still-too-big model.

## Output pack name

`legacyedge-firehd8-openclaw-client-pack` when a device-specific A2A module is required.
