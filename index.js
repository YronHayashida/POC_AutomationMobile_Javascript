const { hasUncaughtExceptionCaptureCallback } = require("process");
const wdio = require("webdriverio");

// javascript
const opts = {
    path: '/wd/hub',
    port: 4723,
    capabilities: {
      platformName: "Android",
      deviceName: "Android Emulator",
      appPackage: "br.com.justa.justo",
      app: "C:\\apk\\justo.apk",
      appActivity: "crc64568f19e795968218.SplashActivity",
      automationName: "UiAutomator2",
      udid: "emulator-5554"
    }
  };
  
  async function main () {
    const client = await wdio.remote(opts);

    const field = await client.$("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[1]");
    await field.click();

    const field2 = await client.$("//android.widget.EditText[@content-desc=\"email\"]");
    await field2.setValue("ajuda@justa.com.vc");

    const field3 = await client.$("//android.widget.EditText[@content-desc=\"password\"]");
    await field3.setValue("29959810000151j");

    const field4 = await client.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.Button[1]");
    await field4.click();
 
    client.setTimeout({implicit: 5000})

    const field5 = await client.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button");
    await field5.click();
    
    const menu = await client.$("//android.widget.ImageButton[@content-desc=\"OK\"]")
    await menu.click();

    const meusDados = await client.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/androidx.drawerlayout.widget.DrawerLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.ListView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout")
    await meusDados.click();

    const tela = await client.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/androidx.drawerlayout.widget.DrawerLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup")
    await expect(tela).toBeDisplayed()

}

  main()
