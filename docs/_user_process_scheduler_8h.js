var _user_process_scheduler_8h =
[
    [ "NeOS::UserProcessImage", "struct_ne_o_s_1_1_user_process_image.html", "struct_ne_o_s_1_1_user_process_image" ],
    [ "NeOS::UserProcess", "class_ne_o_s_1_1_user_process.html", "class_ne_o_s_1_1_user_process" ],
    [ "NeOS::UserProcess::ProcessMemoryHeapList", "struct_ne_o_s_1_1_user_process_1_1_process_memory_heap_list.html", "struct_ne_o_s_1_1_user_process_1_1_process_memory_heap_list" ],
    [ "NeOS::UserProcess::UserProcessSignal", "struct_ne_o_s_1_1_user_process_1_1_user_process_signal.html", "struct_ne_o_s_1_1_user_process_1_1_user_process_signal" ],
    [ "NeOS::UserProcessTeam", "class_ne_o_s_1_1_user_process_team.html", "class_ne_o_s_1_1_user_process_team" ],
    [ "NeOS::UserProcessScheduler", "class_ne_o_s_1_1_user_process_scheduler.html", "class_ne_o_s_1_1_user_process_scheduler" ],
    [ "NeOS::UserProcessHelper", "class_ne_o_s_1_1_user_process_helper.html", "class_ne_o_s_1_1_user_process_helper" ],
    [ "kProcessInvalidID", "_user_process_scheduler_8h.html#ac2dfb09b8404d9ed4f164e37f7022a88", null ],
    [ "kProcessNameLen", "_user_process_scheduler_8h.html#af12ea5c3a94df92098d03e789558e0e6", null ],
    [ "kSchedInvalidPID", "_user_process_scheduler_8h.html#a1d537f5b893dc6838811704135744b72", null ],
    [ "kSchedMaxMemoryLimit", "_user_process_scheduler_8h.html#af15d27971febb6ea29dd62469e47424d", null ],
    [ "kSchedMaxStackSz", "_user_process_scheduler_8h.html#ab226cdb47327ca7fe2c483852d35ce2c", null ],
    [ "kSchedMinMicroTime", "_user_process_scheduler_8h.html#a8c5f8dfaa515acaa19b5a50204a39bdd", null ],
    [ "kSchedProcessLimitPerTeam", "_user_process_scheduler_8h.html#ae633e81676a77d8dc3d29554f5d283c9", null ],
    [ "ImagePtr", "_user_process_scheduler_8h.html#a09fdb1f1ccded9b7cc1692b94d87f82a", null ],
    [ "PID", "_user_process_scheduler_8h.html#adf3245fc30d7047cf8e6347bd0a85da7", null ],
    [ "ProcessID", "_user_process_scheduler_8h.html#af180f8fc4c88cb9674ca595d93859ef0", null ],
    [ "ProcessTime", "_user_process_scheduler_8h.html#a4dfbeee64cedc9cbf2d0bce0fe4ed946", null ],
    [ "PTime", "_user_process_scheduler_8h.html#ae9468f37b05939a22e347c61e2a4bf88", null ],
    [ "UserThreadArray", "_user_process_scheduler_8h.html#abb4ec536c3398dd2c0174ab4fac54e31", null ],
    [ "AffinityKind", "_user_process_scheduler_8h.html#ac078214fad2942d92668502ac78e68c4", [
      [ "kRealTime", "_user_process_scheduler_8h.html#ac078214fad2942d92668502ac78e68c4ae0f4fc1e0994e23b803ed82fb5e9930b", null ],
      [ "kVeryHigh", "_user_process_scheduler_8h.html#ac078214fad2942d92668502ac78e68c4ab19e80cac5b7f585659031a6cff1489b", null ],
      [ "kHigh", "_user_process_scheduler_8h.html#ac078214fad2942d92668502ac78e68c4aa022f15e910eb36278094efb6e808a07", null ],
      [ "kStandard", "_user_process_scheduler_8h.html#ac078214fad2942d92668502ac78e68c4a821da62632c491ea619ead7b31c094bf", null ],
      [ "kLowUsage", "_user_process_scheduler_8h.html#ac078214fad2942d92668502ac78e68c4a6fc62c4bc4a2866a04a3aaed3dd683f9", null ],
      [ "kVeryLowUsage", "_user_process_scheduler_8h.html#ac078214fad2942d92668502ac78e68c4a13f6c056527aad863a9c3a46b6398aa5", null ]
    ] ],
    [ "ProcessLevelRing", "_user_process_scheduler_8h.html#a041ae4e83fd6f2a3402e7e888eb1725d", [
      [ "kRingStdUser", "_user_process_scheduler_8h.html#a041ae4e83fd6f2a3402e7e888eb1725da4273218a9bea7fb97d46ca7501cbeb5b", null ],
      [ "kRingSuperUser", "_user_process_scheduler_8h.html#a041ae4e83fd6f2a3402e7e888eb1725da4215aa66f39b8ac7be3873fb4f938164", null ],
      [ "kRingGuestUser", "_user_process_scheduler_8h.html#a041ae4e83fd6f2a3402e7e888eb1725daa475eaec0320dbeccd09f64fc4beff05", null ],
      [ "kRingCount", "_user_process_scheduler_8h.html#a041ae4e83fd6f2a3402e7e888eb1725da9fb09bc213dbaf1dff9fc3a42d0237b5", null ]
    ] ],
    [ "ProcessStatusKind", "_user_process_scheduler_8h.html#aaef3134e82ab6c89ea36d797ef47e3dd", [
      [ "kInvalid", "_user_process_scheduler_8h.html#aaef3134e82ab6c89ea36d797ef47e3ddab10913c938482a8aa4ba85b7a1116cb4", null ],
      [ "kStarting", "_user_process_scheduler_8h.html#aaef3134e82ab6c89ea36d797ef47e3dda03fb3e2d7f3d8e2d339479a2d4e337f6", null ],
      [ "kRunning", "_user_process_scheduler_8h.html#aaef3134e82ab6c89ea36d797ef47e3dda2fc7fbf0d19294f85dd3880460dd3c0a", null ],
      [ "kKilled", "_user_process_scheduler_8h.html#aaef3134e82ab6c89ea36d797ef47e3dda1350eef47aadec7321071fa167454d1e", null ],
      [ "kFrozen", "_user_process_scheduler_8h.html#aaef3134e82ab6c89ea36d797ef47e3dda9b118db4682cb2b26264e1c068718b2d", null ],
      [ "kFinished", "_user_process_scheduler_8h.html#aaef3134e82ab6c89ea36d797ef47e3dda16b903606caf0e3128389431c392faf3", null ],
      [ "kCount", "_user_process_scheduler_8h.html#aaef3134e82ab6c89ea36d797ef47e3dda5a162d352f3b3603e03fc9b2f043fb40", null ]
    ] ],
    [ "ProcessSubsystem", "_user_process_scheduler_8h.html#ad6ea067b3faba784b2f1ed5303a984e6", [
      [ "kProcessSubsystemSecurity", "_user_process_scheduler_8h.html#ad6ea067b3faba784b2f1ed5303a984e6a3866b7f130c172bcbd757548fa82cd02", null ],
      [ "kProcessSubsystemApplication", "_user_process_scheduler_8h.html#ad6ea067b3faba784b2f1ed5303a984e6acf156487a4a7b6e44a568ab1303e3f37", null ],
      [ "kProcessSubsystemService", "_user_process_scheduler_8h.html#ad6ea067b3faba784b2f1ed5303a984e6a8069881ad9a19e2bda12ef381f1349e3", null ],
      [ "kProcessSubsystemDriver", "_user_process_scheduler_8h.html#ad6ea067b3faba784b2f1ed5303a984e6a5fecdbaa1dcade5c561b4ec47c284be3", null ],
      [ "kProcessSubsystemInvalid", "_user_process_scheduler_8h.html#ad6ea067b3faba784b2f1ed5303a984e6a4d03d85bad0d1656fc4c845b3531117b", null ],
      [ "kProcessSubsystemCount", "_user_process_scheduler_8h.html#ad6ea067b3faba784b2f1ed5303a984e6a8ac11671d61d56c2508a9f9c4d026739", null ]
    ] ],
    [ "operator<", "_user_process_scheduler_8h.html#acb27e9365b080ce9d813b727f5297ea6", null ],
    [ "operator<=", "_user_process_scheduler_8h.html#a25b07e9e30c2a7fda2120f5e142442d2", null ],
    [ "operator>", "_user_process_scheduler_8h.html#afbe0634a467c6ece2a7d215eed98989e", null ],
    [ "operator>=", "_user_process_scheduler_8h.html#a851d07952a1142dbf34dfb123d86ead2", null ],
    [ "sched_get_exit_code", "_user_process_scheduler_8h.html#a664f1b9363ef8f08402cb52fff8110cb", null ]
];