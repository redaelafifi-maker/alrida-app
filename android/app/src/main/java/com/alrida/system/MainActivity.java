package com.alrida.system;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;
import com.aparajita.capacitor.biometricauth.BiometricAuthNative;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(BiometricAuthNative.class);
        super.onCreate(savedInstanceState);
    }
}
