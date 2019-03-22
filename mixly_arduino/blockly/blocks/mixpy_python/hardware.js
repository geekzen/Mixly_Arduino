'use strict';

goog.provide('Blockly.Blocks.hardware');

goog.require('Blockly.Blocks');

Blockly.Blocks.hardware.HUE = 40

Blockly.Blocks.hardware_arduino_init = {
    init: function () {
        this.setColour(Blockly.Blocks.hardware.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_HARDWARE)
        this.appendValueInput('SUB')
            .appendField(Blockly.MIXLY_SETUP)
            .setCheck("var");
        this.appendValueInput("PIN")
           .setAlign(Blockly.ALIGN_RIGHT)
           .appendField(Blockly.MIXLY_HARDWARE_SERIAL);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        // this.setTooltip(Blockly.MIXLY_RGB_PIN_COUNT);
    }
};

Blockly.Blocks.hardware_arduino_start = {
    init: function () {
        this.setColour(Blockly.Blocks.hardware.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_HARDWARE)
        this.appendValueInput('SUB')
            .setCheck("var");
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_HARDWARE_START)
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        // this.setTooltip('');
        // this.setTooltip(Blockly.MIXLY_ESP32_MUSIC_WRI);
    }
};

Blockly.Blocks['inout_highlow'] = {
   init: function() {
    this.setColour(Blockly.Blocks.hardware.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_HIGH, "HIGH"], [Blockly.MIXLY_LOW, "LOW"]]), 'BOOL')
    this.setOutput(true, Boolean);
    this.setTooltip(Blockly.MIXLY_ESP32_INOUT_HIGHLOW_TOOLTIP);
  }
};

Blockly.Blocks.hardware_arduino_digital_write = {
  init: function() {
    this.setColour(Blockly.Blocks.hardware.HUE);
    this.appendValueInput("PIN",Number)
        .appendField(Blockly.MIXLY_HARDWARE + 's4a ' + Blockly.MIXLY_Digital_PINMODEOUT)
        .appendField(Blockly.MIXLY_PIN+"#")
        .setCheck(Number);
    this.appendValueInput("STAT")
        .appendField(Blockly.MIXLY_STAT)
        .setCheck([Number,Boolean]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    // this.setTooltip(Blockly.MIXLY_ESP32_INOUT_DIGITAL_WRITE_TOOLTIP);
  }
};

Blockly.Blocks.hardware_arduino_digital_read = {
  init: function() {
    this.setColour(Blockly.Blocks.hardware.HUE);
    this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_HARDWARE + 's4a ')
        .appendField(Blockly.MIXLY_Digital_PINMODEIN)
        .appendField(Blockly.MIXLY_PIN+"#")
        .setCheck(Number);
    this.appendDummyInput()
        .appendField(Blockly.MIXLY_ESP32_MACHINE_VALUE)
    this.setInputsInline(true);
    this.setOutput(true, [Boolean,Number]);
    // this.setTooltip(Blockly.MIXLY_ESP32_INOUT_DIGITAL_READ_TOOLTIP);
  }
};

Blockly.Blocks.hardware_arduino_analog_write = {
  init: function() {
    this.setColour(Blockly.Blocks.hardware.HUE);
    this.appendValueInput("PIN",Number)
        .appendField(Blockly.MIXLY_HARDWARE + 's4a ' + Blockly.MIXLY_Analog_PINMODEOUT)
        .appendField(Blockly.MIXLY_PIN+"#")
        .setCheck(Number);
    this.appendValueInput("NUM", Number)
        .appendField(Blockly.MIXLY_VALUE2)
        .setCheck(Number);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    // this.setTooltip(Blockly.MIXLY_ESP32_INOUT_DIGITAL_WRITE_TOOLTIP);
  }
};

Blockly.Blocks.hardware_arduino_analog_read = {
  init: function() {
    this.setColour(Blockly.Blocks.hardware.HUE);
    this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_HARDWARE + 's4a ')
        .appendField(Blockly.MIXLY_Analog_PINMODEIN)
        .appendField(Blockly.MIXLY_PIN+"#")
        .setCheck(Number);
    this.appendDummyInput()
        .appendField(Blockly.MIXLY_ESP32_MACHINE_VALUE)
    this.setInputsInline(true);
    this.setOutput(true, [Boolean,Number]);
    // this.setTooltip(Blockly.MIXLY_ESP32_INOUT_DIGITAL_READ_TOOLTIP);
  }
};