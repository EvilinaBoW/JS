const { proxy, revoke } = Proxy.revocable({}, {});
revoke();