package com.alrida.system;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;
import com.aparajita.capacitor.biometricauth.BiometricAuthPlugin;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(BiometricAuthPlugin.class);
        super.onCreate(savedInstanceState);
    }
}
